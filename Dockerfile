FROM node:18-slim

# Install Python, Pip, and FFmpeg
RUN apt-get update && \
    apt-get install -y python3 python3-pip ffmpeg && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install Node dependencies
RUN npm install

# Install spotdl (using --break-system-packages as we are in a container)
RUN pip3 install spotdl --break-system-packages

# Copy app source
COPY . .

# Expose port
EXPOSE 3001

# Start command
CMD ["npm", "start"]
