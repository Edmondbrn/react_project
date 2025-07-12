FROM node:16-alpine

WORKDIR /app

# Create nod# Change ownership of the working directory to node user
RUN chown -R node:node /app

# use Node user
USER node

# Install dependencies
COPY --chown=node:node package*.json ./
RUN npm install

# Create cache directory with proper permissions
RUN mkdir -p node_modules/.cache && chmod -R 755 node_modules/.cache

# Copy the rest of the application code
COPY --chown=node:node . .

# startr in dev mode
CMD ["npm", "start"]