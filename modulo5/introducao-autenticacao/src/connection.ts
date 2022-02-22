import knex from 'knex'
import {user} from './types'
import dotenv from 'dotenv'

dotenv.config()



const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multipleStatements: true
    }

})
export const getUserById = async (id: string): Promise<user> => {
    const user = await connection('list_users').where({ id })
    return user[0]
  }






export default connection