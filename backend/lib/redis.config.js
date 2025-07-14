import { createClient } from 'redis';
import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: process.env.REDIS_ENDPOINT_URL,
    token: process.env.REDIS_TOKEN,
})
 
export default redis