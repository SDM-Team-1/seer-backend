const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  isProd: env === "production",
  port: process.env.PORT || 3000,
};

switch (env) {
  case "dev":
  case "development":
    {
      const envConfig = require("./dev").config;
      baseConfig.dbURI =
        `mongodb://${envConfig.clusterURL}/${envConfig.database}` +
        `?retryWrites=true&w=majority&readPreference=primary`;
    }
    break;

  case "test":
  case "testing":
    {
      const envConfig = require("./testing").config;
      baseConfig.dbURI =
        `mongodb+srv://${envConfig.username}:${envConfig.password}` +
        `@${envConfig.clusterURL}/${envConfig.database}` +
        `?retryWrites=true&w=majority&replicaSet=atlas-o0cppa-shard-0&readPreference=primary`;
    }
    break;

  case "prod":
  case "live":
  case "production":
    {
      const envConfig = require("./prod").config;
      baseConfig.dbURI =
        `mongodb+srv://${envConfig.username}:${envConfig.password}` +
        `@${envConfig.clusterURL}/${envConfig.database}` +
        `?retryWrites=true&w=majority&replicaSet=atlas-o0cppa-shard-0&readPreference=primary`;
    }
    break;

  default: {
    envConfig = require("./dev").config;
  }
}

module.exports.environmentConfig = { ...baseConfig };
