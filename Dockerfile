#stage 1
FROM node:16-alpine as node
WORKDIR /app
COPY Ang/ .
RUN npm install
# This is with nginx running
RUN npm run build --configuration=dkr

#This is without nginx
# EXPOSE 4200
# CMD /app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck


# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/Ang /usr/share/nginx/html
EXPOSE 80