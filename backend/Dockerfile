# Using an official Node.js runtime as the parent image
FROM node:latest

# Set the working directory
WORKDIR /code

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
COPY tsconfig.json ./

# Install all dependencies including devDependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["/bin/bash"]
