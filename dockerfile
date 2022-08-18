FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install -g npm@8.18.0

RUN npm install --force

COPY ./ ./ 

CMD ["npm", "start"]