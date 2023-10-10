FROM node:18

RUN npm install bun -g

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN bun install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

ENV VITE_APP_BASE_URL=https://sengxingstxhaltech.pythonanywhere.com/
ENV VITE_APP_BASE_API_URL=https://sengxingstxhaltech.pythonanywhere.com/api

# build app for production with minification
RUN bun run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]