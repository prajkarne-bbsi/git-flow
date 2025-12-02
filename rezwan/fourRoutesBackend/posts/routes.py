from fastapi import APIRouter, HTTPException
from .models import PostCreate, PostUpdate
import sqlite3

from pydantic import BaseModel


router = APIRouter()
con = sqlite3.connect("database.db")
cur = con.cursor()


@router.get("/")
async def get_posts(page: int = 1, q: str | None = None):
  if page < 1:
    raise HTTPException(status_code=400, detail="Page number must be >= 1")

  query = q or ""
  limit = 5
  offset = (page - 1) * limit

  cur.execute(
    "SELECT COUNT(*) FROM posts WHERE title LIKE ? OR content LIKE ?",
    (f"%{query}%", f"%{query}%")
  )
  total_posts = cur.fetchone()[0]

  total_pages = (total_posts + limit - 1) // limit
  if page > total_pages and total_posts != 0:
    raise HTTPException(status_code=404, detail="Page number out of range")

  cur.execute(
    "SELECT id, title, content FROM posts WHERE title LIKE ? OR content LIKE ? LIMIT ? OFFSET ?",
    (f"%{query}%", f"%{query}%", limit, offset)
  )
  columns = [col[0] for col in cur.description]
  posts = [dict(zip(columns, row)) for row in cur.fetchall()]

  from_item = offset + 1 if posts else 0
  to_item = offset + len(posts)

  return {
    "posts": posts,
    "total": total_posts,
    "from": from_item,
    "to": to_item,
    "page": page,
    "total_pages": total_pages
  }



@router.post("/{user_id}")
async def create_post(user_id: int, post: PostCreate):
  cur.execute("SELECT id FROM users WHERE id = ?", (user_id,))
  if not cur.fetchone():
    raise HTTPException(status_code=404, detail="User not found")
  
  cur.execute("INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)", (user_id, post.title, post.content))
  con.commit()
  return {"message": "Post created successfully", "post_id": cur.lastrowid}


@router.put("/{post_id}")
async def update_post(post_id: int, post: PostUpdate):
  cur.execute("SELECT id FROM posts WHERE id = ?", (post_id,))
  if not cur.fetchone():
    raise HTTPException(status_code=404, detail="Post not found")
  update_data = {}
  if post.title is not None:
    update_data["title"] = post.title
  if post.content is not None:
    update_data["content"] = post.content

  if update_data:
      
    set_clause = ", ".join(f"{col} = ?" for col in update_data.keys())
    values = list(update_data.values())
    values.append(post_id)  # for WHERE id = ?
    cur.execute(f"UPDATE posts SET {set_clause} WHERE id = ?", values)
    con.commit()

  return {"message": "Post updated successfully", "post_id": post_id}


@router.delete("/{post_id}")
async def delete_post(post_id: int):
  cur.execute("SELECT id FROM posts WHERE id = ?", (post_id,))
  if not cur.fetchone():
    raise HTTPException(status_code=404, detail="Post not found")
  
  cur.execute("DELETE FROM posts WHERE id = ?", (post_id,))
  con.commit()
  return {"message": "Post deleted successfully", "post_id": post_id}
