#!/bin/bash
# Start the dedicated Cloudflare Tunnel for Sync Files
# Tunnel ID: d6c6d7dd-3b55-4b2d-aa86-bc3d148f29a3

echo "Starting Cloudflare Tunnel for Sync Files..."
echo "Tunnel ID: d6c6d7dd-3b55-4b2d-aa86-bc3d148f29a3"
echo "Connecting to local server on port 8765..."

# Run cloudflared in Docker with host networking to access localhost:8765
docker run --rm --name sync-files-tunnel \
  --network host \
  cloudflare/cloudflared:latest \
  tunnel --no-autoupdate run \
  --token eyJhIjoiOGJkODAyNGIyNzc2MzJlZjMyYTgzN2MzNTJkYTQyMjkiLCJ0IjoiZDZjNmQ3ZGQtM2I1NS00YjJkLWFhODYtYmMzZDE0OGYyOWEzIiwicyI6IlkyUm1aV0V3WmpjdFpqZ3laaTAwT0RJNExUZ3lZV0l0WVRBeE1qZ3daRGcyTW1RMyJ9
