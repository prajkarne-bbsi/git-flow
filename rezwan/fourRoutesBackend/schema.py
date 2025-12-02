import sqlite3
con = sqlite3.connect("database.db")
cur = con.cursor()

cur.execute("PRAGMA foreign_keys = ON;")

cur.execute("""
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
)
""")

cur.execute("""
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
)
""")

users = [
  ("Alice Johnson", "alice@example.com"),
  ("Bob Martinez", "bob@example.com"),
  ("Charlie Singh", "charlie@example.com")
]
cur.executemany("INSERT INTO users (name, email) VALUES(?, ?)", users)


posts = [
  (1, "Welcome to my profile", "Excited to join this community and share updates!"),
  (1, "Python Journey Update", "Today I learned about SQLite and foreign keys — feeling good!"),
  (2, "Travel Diary: Seattle", "Visited Pike Place Market today — amazing food and views."),
  (2, "My Tech Stack", "Currently learning Flask and React. Any project ideas?"),
  (3, "Workout Log Day 1", "Started a new 30-day fitness challenge — wish me luck!"),
  (3, "Recipe Share", "Just cooked an awesome chicken pasta. DM for the recipe!")
]
cur.executemany("INSERT INTO posts (user_id, title, content) VALUES(?, ?, ?)", posts)

con.commit()
con.close()

