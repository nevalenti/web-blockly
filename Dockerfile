FROM node:lts-alpine
WORKDIR /web-blockly
ADD . .
RUN npm install all
CMD npm run start-all
