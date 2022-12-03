FROM node:16 as builder

RUN npm install lerna --global

WORKDIR /app

COPY . .

RUN lerna bootstrap --ci
RUN lerna link
RUN npm run packages-build
RUN lerna run --scope @light-space/web-app-main build

FROM node:16-alpine as runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "--workspace", "@light-space/web-app-main", "start"]

# FROM node:16-alpine as runner

# ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# WORKDIR /app

# COPY --from=builder /app/services/web-app-main/public ./public

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/services/web-app-main/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/services/web-app-main/.next/static ./.next/static

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000

# CMD ["node", "server.js"]