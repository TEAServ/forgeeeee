// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: "qZiKCeX2tWRlAgErOvQ4GhLtv7Bzhr3X",
        client_secret: "1exSz5gYXd7yG4OI",
        callback_url: process.env.FORGE_CALLBACK || process.env.FORGE_CALLBACK_URL,
        webhook_url: "https://ae5c-41-37-6-53.eu.ngrok.io "
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'bucket:delete', 'data:read', 'data:create', 'data:write', 'code:all'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    },
    client: {
        circuitBreaker: {
            threshold: 11,
            interval: 1200
        },
        retry: {
            maxNumberOfRetries: 7,
            backoffDelay: 4000,
            backoffPolicy: 'exponentialBackoffWithJitter'
        },
        requestTimeout: 13000
    }
};
