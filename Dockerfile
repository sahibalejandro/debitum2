FROM node:15.6-alpine3.12

ARG NODE_ENV
ENV HTTP_PORT=4001
ENV NODE_ENV=${NODE_ENV:-production}

WORKDIR /var/www

COPY package.json yarn.lock ./
RUN yarn --ignore-optional

COPY backend/ backend/
COPY src/ src/
COPY public/ public/
COPY index.html vite.config.js ./

RUN yarn build

CMD yarn start
