import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.CONNECTION_STRING

const db = new Pool({ connectionString })

export default db