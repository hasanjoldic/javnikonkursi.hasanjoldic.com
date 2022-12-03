FROM node:16 AS build
ARG ENV

RUN npm install pnpm --global

USER node

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "start"]