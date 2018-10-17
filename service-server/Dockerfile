FROM node:10
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Run commands inside bash
# RUN npm run build:ssr-dev
CMD ["npm", "start"]