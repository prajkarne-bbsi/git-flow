from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from posts.routes import router as posts_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      
    allow_credentials=True,
    allow_methods=["*"],      
    allow_headers=["*"],       
)


app.include_router(posts_router, prefix="/v1/posts", tags=["posts"])