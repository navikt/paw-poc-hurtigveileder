FROM nginx:1.17.7-alpine
COPY out /usr/share/nginx/html/arbeid/hurtigveileder
COPY nginx.conf /etc/nginx/nginx.conf