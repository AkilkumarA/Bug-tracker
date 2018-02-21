var config = {
    server: {
        mongodb: {
            connectionURL: 'mongodb://localhost:27017/bugtracker'
        }
    },
    client: {
        mongoAPI: {
            HOST: 'localhost:3000',
            BASE_PATH: '/tickets'
        }
    }
}

module.exports = config