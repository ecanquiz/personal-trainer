FROM node:20.11.1 AS build
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

CMD [ "node", ".output/server/index.mjs" ] 

## TODO
#FROM nginx:1.23.1
#COPY --from=build /app/.output/server /opt/site
#COPY nginx.conf /etc/nginx/nginx.conf
