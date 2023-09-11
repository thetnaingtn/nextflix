build:
	yarn install & yarn build

image:
	docker build -t nginx-next .

container:
	docker container run --name next-nginx -p 8080:80 -d nginx-next

start: build image container


