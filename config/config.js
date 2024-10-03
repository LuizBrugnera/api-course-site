require("dotenv").config();

module.exports = {
  test: {
    username: process.env.DB_USERNAME || "seu_usuario",
    password: process.env.DB_PASSWORD || "sua_senha",
    database: process.env.DB_DATABASE || "minha_api_test",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
  },
  development: {
    username: process.env.DB_USERNAME || "seu_usuario",
    password: process.env.DB_PASSWORD || "sua_senha",
    database: process.env.DB_DATABASE || "minha_api_development",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
  },
  production: {
    username: process.env.DB_USERNAME || "seu_usuario",
    password: process.env.DB_PASSWORD || "sua_senha",
    database: process.env.DB_DATABASE || "minha_api_production",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
  },
};
