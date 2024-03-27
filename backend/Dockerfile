FROM node:21-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install

COPY ./src ./src

CMD ["npm", "run", "start"]
