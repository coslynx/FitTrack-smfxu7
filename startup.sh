#!/bin/bash

set -euo pipefail

# Load environment variables
source .env

# --- Functions ---

log_info() {
  printf "[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1\n"
}

log_error() {
  printf "[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1\n" >&2
}

cleanup() {
  # Remove PID files and stop services (if applicable)
  rm -f /tmp/fitness-tracker.pid
}

check_dependencies() {
  # Check for required tools
  if ! command -v npm &> /dev/null; then
    log_error "npm is not installed. Please install Node.js and npm."
    exit 1
  fi
  if ! command -v firebase &> /dev/null; then
    log_error "Firebase CLI is not installed. Please install it using 'npm install -g firebase-tools'."
    exit 1
  fi
}

start_frontend() {
  log_info "Starting frontend service..."
  npm run dev &> /dev/null &
  store_pid $! "frontend"
  wait_for_service 3000
}

start_backend() {
  log_info "Starting backend service..."
  firebase emulators:start --only functions,firestore &> /dev/null &
  store_pid $! "backend"
  wait_for_service 9000
}

store_pid() {
  local pid=$1
  local service_name=$2
  echo "$pid" > /tmp/fitness-tracker-$service_name.pid
}

wait_for_service() {
  local port=$1
  local timeout=60
  local attempts=0
  until nc -z 127.0.0.1 $port &> /dev/null; do
    if [ $attempts -ge $timeout ]; then
      log_error "Service failed to start on port $port after $timeout seconds."
      exit 1
    fi
    sleep 1
    attempts=$((attempts + 1))
  done
}

# --- Main Script ---

check_dependencies

# Start backend
start_backend

# Start frontend
start_frontend

log_info "Fitness Tracker MVP started successfully!"

# Trap signals for graceful shutdown
trap cleanup EXIT ERR

wait