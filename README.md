# express-blog-post-platform
This is a simple popular analyst app building REST APIs in Node.js using Express. Intended for use with postgresql using Sequelize ORM.


## Getting Started

Install the dependencies
```bash
npm i
```

Set the environment variables
```bash
cp .env.example .env
```

Running the project:
```bash
npm run dev
```

## Configuration

Variables for the environment

| Option | Description |
| ------ | ------ |
| SERVER_PORT | Port the server will run on |
| NODE_ENV | development or production |
| SERVER_JWT | true or false |
| SERVER_JWT_SECRET | JWT secret |
| SERVER_JWT_TIMEOUT | JWT duration time |
| DB_DIALECT | "mysql", "postgres", among others |
| DB_HOST | Database host |
| DB_USER | Database username |
| DB_PASS | Database password |
| DB_NAME | Database name |

# for fufture scope
| AWS_KEYID | Access key ID |
| AWS_SECRETKEY | User secret key |
| AWS_BUCKET | Bucket name |

## Commands for sequelize 
```bash
# Creates the database
npx sequelize db:create 

# Drops the database
npx sequelize db:drop 

# Load migrations
npx sequelize db:migrate 

# Undo migrations
npx sequelize db:migrate:undo:all 

# Load seeders
npx sequelize db:seed:all
```




<h5 align="center">
   Thank You 🙂
</h5>
