# --- Stage 1: Build ---
    FROM node:18-alpine AS builder

    WORKDIR /app
    
    # Copy package files first (to leverage Docker caching)
    COPY package.json package-lock.json ./
    
    # Install all dependencies (both production & dev for building)
    RUN npm install --legacy-peer-deps
    
    # Copy the rest of the application source code
    COPY . .
    
    # Build the Next.js app
    RUN npm run build
    
    # Remove dev dependencies to reduce final image size
    RUN npm prune --production
    
    
    # --- Stage 2: Production ---
    FROM node:18-alpine AS runner
    
    WORKDIR /app
    
    # Copy only necessary files from builder stages
    COPY --from=builder /app/package.json /app/package.json
    COPY --from=builder /app/node_modules /app/node_modules
    COPY --from=builder /app/.next /app/.next
    COPY --from=builder /app/public /app/public
    COPY --from=builder /app/next.config.ts /app/next.config.ts
    
    # Expose the port Next.js runs on
    EXPOSE $PORT
  
    # Start dynamically using passed APP_PORT
    CMD ["npm", "run", "start"]
    