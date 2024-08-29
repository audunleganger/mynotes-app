FROM node:alpine

WORKDIR /srv/app

COPY package*.json ./

RUN npm install && ls -la node_modules

CMD ["npm", "run", "dev"]


