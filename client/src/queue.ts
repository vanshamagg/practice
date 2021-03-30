const redis_new = "rediss://default:f9uvyajszeci76mh@nifty-redis-store-uat-do-user-6763863-0.b.db.ondigitalocean.com:25061"
const redis_old = 'rediss://default:ufxpil8hqamczpcf@nifty-uat-redis-do-user-6763863-0.db.ondigitalocean.com:25061'
const redis = redis_old

export default [
    {
        name: "task",
        prefix: "task",
        redis
    }
]