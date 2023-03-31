# Dockerfile
FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["/bin/bash", "-c", "uvicorn main:app --host 0.0.0.0 --port 9000"]