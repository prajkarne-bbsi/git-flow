from fastapi import FastAPI, File, Query, UploadFile
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional, Dict, Any
import csv
import io

app = FastAPI(title="Word Counter", version="1.0.0")


class ResponseModel(BaseModel):
    is_error: bool
    payload: Optional[Dict[str, Any]]
    message: str


@app.post("/get-employee-names/")
async def get_employee_names(file: UploadFile = File(...)):
    
    try:
        content = await file.read() # reads file content as bytes
        text_content = content.decode('utf-8') # converts raw bytes to string
        
        csv_reader = csv.DictReader(io.StringIO(text_content))
        names = [row['name'] for row in csv_reader]
        
        response = ResponseModel(
            is_error=False,
            payload={
                "names": names,
            },
            message="Employee names extracted successfully"
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



@app.post("/get-employee-id-names/")
async def get_employee_id_names(
    file: UploadFile = File(...),
    page: int = Query(default=1, ge=1, description="Page number default to 1)"),
    page_size: int = Query(default=10, ge=1, le=100, description="Number of employees data per page")):
    
    try:
        content = await file.read()
        text_content = content.decode('utf-8')
  
        csv_reader = csv.DictReader(io.StringIO(text_content))
        all_employees = [{"id": int(row['id']), "name": row['name']} for row in csv_reader]
        
        total_employees = len(all_employees)
        total_pages = (total_employees + page_size - 1) // page_size  

        if page > total_pages:
            response = ResponseModel(
                is_error=True,
                payload={
                    "total_employees": total_employees,
                    "page": page,
                    "total_pages": total_pages,
                },
                message=f"Page {page} does not exist for this request"
            )
            return JSONResponse(
                status_code=404,
                content=response.model_dump()
            )
        
        start_index = (page - 1) * page_size
        end_index = start_index + page_size
        employees = all_employees[start_index:end_index]

        response = ResponseModel(
            is_error=False,
            payload={
                "employees": employees,
                "total_employees": total_employees,
                "total_pages": total_pages,

            },
            message="Employee data extracted successfully"
        )

        return JSONResponse(
            status_code=200,
            content=response.model_dump()
        )
    
    except Exception as e:
        response = ResponseModel(
            is_error=True,
            payload=None,
            message=f"Error processing the file: {str(e)}"
        )
        return JSONResponse(
            status_code=400,
            content=response.model_dump()
        )
