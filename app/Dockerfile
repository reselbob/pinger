FROM node:8.9-alpine
USER ubuntu
COPY server.js .
COPY package.json .
RUN npm install --only-production
EXPOSE 3000
CMD ["node", "server.js"]
