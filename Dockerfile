FROM registry.access.redhat.com/ubi8/nodejs-12:1
COPY src src/
COPY package.json package-lock.json angular.json tsconfig.app.json tsconfig.json ./
RUN npm install
RUN npm install -g @angular/cli@11.2.9
EXPOSE 4200
CMD ng serve --host 0.0.0.0