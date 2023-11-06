# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
RUN mkdir -p /app/src
WORKDIR /app/

# Copy package.json and package-lock.json to the working directory
COPY package*.json /app

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .


# Build the React app (including TypeScript) for production
#RUN npm run build

# Expose the port your app will run on (default is 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
