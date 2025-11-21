import csv
from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.post("/employees/object")
async def get_employees_object(file: UploadFile = File(...)):
    file.file.seek(0)

    users = {}
    lines = []
    for line in file.file:
      lines.append(line.decode("utf-8"))

    reader = csv.reader(lines)

    for parts in reader:
      if parts[0] == "id":
        continue
      users[parts[0]] = f"{parts[1]} {parts[2]}"

    return users

@app.post("/employees/array")
async def get_employees_array(file: UploadFile = File(...)):
  file.file.seek(0)

  users = []
  lines = []
  for line in file.file:
    lines.append(line.decode("utf-8"))

  reader = csv.reader(lines)

  for parts in reader:
    if parts[0] == "id":
      continue
    users.append(f"{parts[1]} {parts[2]}")

  return users