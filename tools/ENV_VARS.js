var ENV_VARS

let CONSTANTS = {
    CONSUMER: "CONSUMER",
    PRODUCER: "PRODUCER",
    MAX_SIZE: 10
}

if (process.env.NODE_ENV !== "production") {
    ENV_VARS = {
        CONSTANTS: CONSTANTS,
        SERVER_URL: "http://localhost:9000"
    }
} else {
    ENV_VARS = {
        CONSTANTS: CONSTANTS,
        SERVER_URL: "http://localhost:9000"
    }
}

export default ENV_VARS