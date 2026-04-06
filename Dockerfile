# Monolithic Root Dockerfile for Render Web Services
# Optimized for Next.js in a monorepo structure.

FROM node:20 AS builder
WORKDIR /app

# 1. Install pnpm globally
RUN npm install -g pnpm@10.8.1

# 2. Copy workspace config for dependency resolution
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/

# 3. Install ALL dependencies for the workspace
# This ensures that any cross-package links are correctly established.
RUN pnpm install --frozen-lockfile

# 4. Copy the entire source code for the build
COPY . .

# 5. Build the frontend
RUN pnpm --filter magic-web build

# Stage 2: Production Runner
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built assets and necessary workspace folders
# We copy node_modules and .next to the same paths as in the builder
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder /app/apps/web/package.json ./apps/web/package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Start Next.js from the web app's directory
CMD ["sh", "-c", "cd apps/web && npm start"]
