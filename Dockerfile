# Dockerfile

# Use a small web server image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Install http-server globally to serve static files
RUN npm install -g http-server

# Expose port 8080 (default for http-server)
EXPOSE 8080

# Start http-server at container launch
CMD [ "http-server", "-p", "8080" ]
