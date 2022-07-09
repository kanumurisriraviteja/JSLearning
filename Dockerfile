#stage 1
FROM node:16-alpine as node
WORKDIR /app
COPY Ang/ .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/Ang /usr/share/nginx/html
EXPOSE 80