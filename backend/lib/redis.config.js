import { createClient } from 'redis';
import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: process.env.REDIS_ENDPOINT_URL,
    token: process.env.REDIS_TOKEN,
})

export const cacheResult = async (key, value) => {
    await redis.set(key, value);
}

export const fetchCachedResult = async (value) => {
    redis.get(value)
}