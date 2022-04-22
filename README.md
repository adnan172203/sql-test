## What I have used?

- Node.js
- Express
- Sequelize
- Postgres

```
#  Go to the root folder and open the terminal follow these steps

- npm install

- npx sequelize-cli db:create

- npx sequelize-cli db:migrate

- npm start

- update the /project/config/config.json file with the necessary info

{
  "development": {
    "username": "postgres",
    "password": "admin",
    "database": "shop-db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

- finally import test-db.sql into database for dummy data
```
