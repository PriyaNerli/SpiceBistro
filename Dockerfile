# 1. Use official Node.js LTS image
FROM node:18-alpine AS base

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies (only package.json and lock file to optimize Docker layer caching)
COPY package.json package-lock.json* yarn.lock* ./

# 4. Install dependencies
RUN npm install --frozen-lockfile

# 5. Copy the rest of the code
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose the desired port (optional)
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]
