This is a simple project created to learn about microservices.

### Quick Reference
- `./start` - easy alias script for docker compose
- Then go to [http://localhost:3000/](http://localhost:3000/)
- DB example: [http://localhost:3000/orders/all](http://localhost:3000/orders/all)

### Tech Used
- **Docker** - each service and database runs in it's own container
- **ExpressJS** - NodeJS backend for simple CRUD applications. Will add React front-end eventually
- **PostgreSQL** - C'mon, you know what this does :) Database for each service
- **Kafka** - utilizing KafkaJS package and Bitnami's Kafka image for message queues

### Troubleshooting Log

#### NPM IP package vulernable to SSRF attacks
Wasn't sure where this was coming from. 
Ran `npm explain ip` to find that the `pm2` package was dependent on `ip` package.
Viewed available versions with `npm view pm2 versions` and saw I was on latest (5.3.1).
Ignoring for now until they fix it :/

#### SequelizeHostNotFoundError
- When I moved to a multi-container setup I managed to break the DB connection to the order client.
- Verified I can connect inside the Docker terminal with `psql -U postgres` and get data...
- Was able to connect using pgAdmin by changing port to 5431 (might be a port conflict)
- Can't get order service to connect, even using 5431 port...
- Wasted a lot of time being dumb. The solution? Keep port 5432 and set the DB Host to "order-service-db" 



