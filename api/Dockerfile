FROM node:20-alpine
WORKDIR /app
COPY ./src ./src
COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install
CMD ["node", "dist/main"]
