### Stage 1: Build

# Use the Node.js base image / Define as build stage
FROM node:23-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application's source code
COPY . .



### Stage 2: Runtime

# Use the Alpine based Node.js image
FROM node:23-alpine3.20 AS runtime

# Create system user "appuser" / no PW
RUN adduser -S -D -H -h /app appuser

# Switch to "appuser"
USER appuser

# Set the working directory inside the container
WORKDIR /app

# Copy the application
COPY --from=build /app /app

# Expose the port your application listens on
EXPOSE 8080

# Run the application
ENTRYPOINT ["npm", "start"]