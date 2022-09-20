const config = {
  HTTP_PORT: 3000,
  API_VERSION: '1.0.0',
  mongo: {
    username: process.env.BOOKSTORE_MONGODB_USERNAME,
    password: process.env.BOOKSTORE_MONGODB_PASSWORD,
    hostname: process.env.BOOKSTORE_MONGODB_HOSTNAME,
    database: process.env.BOOKSTORE_MONGODB_DATABASE,
  }
};

export default config;