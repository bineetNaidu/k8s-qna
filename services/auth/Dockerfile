FROM node:16-alpine

ENV CI=true
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --silent
COPY ./ ./

CMD [ "npm", "start" ]