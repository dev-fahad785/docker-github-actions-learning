# FROM ubuntu

# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get upgrade -y
# RUN apt-get install -y nodejs

# COPY package.json package.json 
# COPY package-lock.json package-lock.json
# COPY main.js main.js

# RUN npm install

# ENTRYPOINT [ "node", "main.js" ]

FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "main.js" ]