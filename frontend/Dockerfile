FROM node:16-alpine

WORKDIR /app

# Create node user 
RUN chown -R node:node /app

# install depedencies
COPY package*.json ./
RUN npm install

# Change permission to avoid docker crash
RUN mkdir -p node_modules/.cache && chmod -R 755 node_modules/.cache

# use Node user
USER node

# startr in dev mode
CMD ["npm", "start"]