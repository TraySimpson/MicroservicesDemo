This is a simple project created to learn about microservices.

### Command Quick Reference
- `./start` - easy alias script for docker compose

### Tech Used
- **Docker** - each service and database runs in it's own container
- **ExpressJS** - NodeJS backend for simple CRUD applications. Will add React front-end eventually
- **PostgreSQL** - C'mon, you know what this does :)
- **Kafka** - utilizing KafkaJS package and Bitnami's Kafka image for message queues

### Troubleshooting Log

#### NPM IP package vulernable to SSRF attacks
Wasn't sure where this was coming from. 
Ran `npm explain ip` to find that the `pm2` package was dependent on `ip` package.
Viewed available versions with `npm view pm2 versions` and saw I was on latest (5.3.1).
Ignoring for now until they fix it :/

