FROM python:3.10

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Copy project files and wait script
COPY . .
# Make it executable
RUN chmod a+x wait_for_postgres.sh


# Set the working directory to where manage.py is located
WORKDIR /app

# Run the server
# CMD ["./wait_for_postgres.sh", "db", "python", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["./wait_for_postgres.sh", "db", "python", "run_ssl.py", "runserver"]