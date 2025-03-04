FROM node:18

WORKDIR /app

COPY package-lock.json ./
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5273

CMD ["npm", "run", "dev"]
