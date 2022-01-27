FROM node:16.13.2 as build

WORKDIR /client

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

# NGINX Web Server
FROM nginx:1.12-alpine as prod

COPY --from=build /client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
