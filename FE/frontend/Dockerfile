FROM node:16.15.0 as build-stage
WORKDIR /var/jenkins_home/jobs/letscamp/workspace/FE/frontend/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /var/jenkins_home/jobs/letscamp/workspace/FE/frontend/build /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g","daemon off;"]