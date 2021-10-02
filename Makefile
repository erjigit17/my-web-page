run:
	docker run -d -p 80:5000 -v logs:/app/data --env-file ./config/.env --rm --name temp erji:volume
run-dev:
	docker run -d -p 80:5000 -v "/Users/erjigit/Documents/my web page:/app" -v  /app/node-node_modules -v logs:/app/data --env-file ./config/.env --rm --name temp erji:volume
stop:
	docker stop temp
