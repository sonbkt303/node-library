
# FROM node:18-alpine

# WORKDIR /home/node/app

# # RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# COPY package*.json ./

# RUN npm install

# RUN npm test

# COPY . .

# # EXPOSE 8080

# CMD [ "node", "index.js" ]

# FROM node:18-alpine as base

# WORKDIR /home/node-api

# COPY package.json .

# RUN npm install

# COPY . .


ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app
EXPOSE 3000

# FROM base as dev
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --include=dev
# USER node
# COPY . .
# CMD npm run dev

# FROM base as prod
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --omit=dev
# USER node
# COPY . .
# CMD node src/index.js

FROM base as test
ENV NODE_ENV test
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
USER node
COPY . .
CMD npm test


FROM base as dev
ENV NODE_ENV test
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
USER node
COPY . .
CMD npm start