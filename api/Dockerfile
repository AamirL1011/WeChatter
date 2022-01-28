FROM node:16.13.2 as build

ENV NODE_ENV=production 

WORKDIR /api

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

EXPOSE 5000

CMD ["sh", "-c", "npm start"]

