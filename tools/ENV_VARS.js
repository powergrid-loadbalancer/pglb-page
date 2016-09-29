var ENV_VARS

let CONSTANTS = {
    CONSUMER: "CONSUMER",
    PRODUCER: "PRODUCER"
}

if (process.env.NODE_ENV !== "production") {
    ENV_VARS = {
        CONSTANTS: CONSTANTS,
        SERVER_URL: "http://localhost:4567"
    }
} else {
    ENV_VARS = {
        CONSTANTS: CONSTANTS,
        SERVER_URL: "http://104.131.79.185:4567"
    }
}

export default ENV_VARS