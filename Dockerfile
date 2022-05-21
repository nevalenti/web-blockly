FROM node:lts-alpine
WORKDIR /web-blockly
ADD . .
RUN npm run install-all
CMD npm run start-all
