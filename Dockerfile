FROM nginx
COPY host/nginx.conf /etc/nginx/nginx.conf
COPY out/. /var/www/out/.
CMD ["nginx", "-g", "daemon off;"]
