FROM node:16.13.2 as build

WORKDIR /client

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

# NGINX Web Server
FROM nginx:1.12-alpine as prod

# Copy our nginx configuration
COPY nginx.conf /etc/nginx/conf.d/configfile.template

# Copy static assets from build stage
COPY --from=build /client/build /usr/share/nginx/html


# Define environment variables for Cloud Run
ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
