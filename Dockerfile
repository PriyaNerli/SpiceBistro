# Use the official Node.js 18 image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install OS dependencies
RUN apk add --no-cache libc6-compat

# Copy package.json and package-lock.json / yarn.lock / pnpm-lock.yaml
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 3000

# Set environment variables if needed (optional)
# ENV NODE_ENV production

# Start the application
CMD ["npm", "start"]
