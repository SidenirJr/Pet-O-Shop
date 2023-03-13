import knex from "knex";
import dotenv from 'dotenv'
dotenv.config();

export default knex({
    client:'mysql',
    connection:{
        host: process.env.MYSQL_HOST as string,
        port: parseInt (process.env.MYSQL_PORT as string),
        user: process.env.MYSQL_USER as string,
        password: process.env.MYSQL_PASSWORD as string,
        database: process.env.MYSQL_DB as string,
    }
});