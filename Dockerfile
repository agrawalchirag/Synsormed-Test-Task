# Used the official image as a parent image.
FROM node:12.16.3

# Set the working directory.
WORKDIR /usr/src/app

# Copied the file from your host to your current location.
COPY package.json .

# Run the command inside our image filesystem.
RUN npm install

# Runnig the start command within the container.
CMD [ "npm", "start" ]

# Copy the rest of our app's source code from our host to our image filesystem.
COPY . .
