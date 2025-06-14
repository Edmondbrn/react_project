FROM python:3.9

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy project files
COPY . .

# Set the working directory to where manage.py is located
WORKDIR /app

# Run the server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]