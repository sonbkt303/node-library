
FROM node:18-alpine

WORKDIR /home/node/app

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

COPY package*.json ./

RUN npm install

RUN npm test

COPY . .

# EXPOSE 8080

CMD [ "node", "index.js" ]