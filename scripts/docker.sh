#!/bin/bash -

# Set script to exit immediately if a command fails
set -e

# Display help information
function show_help {
  echo "Docker management utility"
  echo ""
  echo "Usage:"
  echo "  ./scripts/docker.sh [command]"
  echo ""
  echo "Commands:"
  echo "  start       Start all containers"
  echo "  stop        Stop all containers"
  echo "  restart     Restart all containers"
  echo "  build       Rebuild containers"
  echo "  logs        View logs from all containers"
  echo "  logs-back   View backend logs only"
  echo "  logs-front  View frontend logs only"
  echo "  shell-back  Open a shell in the backend container"
  echo "  shell-front Open a shell in the frontend container"
  echo "  ps          Show container status"
}

# Main command dispatcher
case "$1" in
  start)
    docker-compose up -d
    ;;
  stop)
    docker-compose down
    ;;
  restart)
    docker-compose down
    docker-compose up -d
    ;;
  build)
    docker-compose build
    ;;
  logs)
    docker-compose logs -f
    ;;
  logs-back)
    docker-compose logs -f backend
    ;;
  logs-front)
    docker-compose logs -f frontend
    ;;
  shell-back)
    docker-compose exec backend bash
    ;;
  shell-front)
    docker-compose exec frontend sh
    ;;
  ps)
    docker-compose ps
    ;;
  *)
    show_help
    ;;
esac