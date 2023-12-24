FROm node:alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock,json ./

run npm install

copy . ./

CMD ["npm", "start"]