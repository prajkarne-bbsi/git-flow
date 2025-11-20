from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional, Dict, Any

app = FastAPI(title="Word Counter", version="1.0.0")


class ResponseModel(BaseModel):
    is_error: bool
    payload: Optional[Dict[str, Any]]
    message: str


@app.post("/calculate-word-count/")
async def calculate_word_count(file: UploadFile = File(...)):
    
    try:
        content = await file.read() # reads file content as bytes
        text_content = content.decode('utf-8') # converts raw bytes to string
        word_count = len(text_content.split())
        
        response = ResponseModel(
            is_error=False,
            payload={
                "word_count": word_count,
            },
            message="File processed successfully"
        )

        return JSONResponse(
            status_code=200,
            content=response.model_dump()
        )
    
    except Exception as e:
        response = ResponseModel(
            is_error=True,
            payload=None,
            message=str(e)
        )
        return JSONResponse(
            status_code=400,
            content=response.model_dump()
        )


