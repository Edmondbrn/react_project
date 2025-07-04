#!/bin/bash -

# Set script to exit immediately if a command fails
set -e

echo "Starting Docker containers..."

# Build if needed
if [ "$1" == "--build" ]; then
  echo "Building containers first..."
  docker-compose build
fi

# Start containers in detached mode
docker-compose up -d

echo "Containers started. Use './scripts/docker.sh logs' to view logs."