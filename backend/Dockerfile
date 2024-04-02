FROM node:21-alpine as dev
WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

RUN npm ci

FROM node:21-alpine as build
WORKDIR /app
COPY . .
COPY --from=dev /app/node_modules ./node_modules
RUN npm run build
RUN npm ci --omit=dev && npm cache clean --force

FROM node:21-alpine as prod
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
CMD [ "node", "dist/main.js" ]