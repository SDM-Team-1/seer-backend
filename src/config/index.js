/* eslint-disable global-require */
import 'dotenv/config';

const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  isProd: env === 'production',
};

switch (env) {
  case 'dev':
  case 'development':
    {
      const envConfig = require('./dev').config;
      baseConfig.port = process.env.PORT || 3000;
      baseConfig.dbURI = `mongodb://${envConfig.clusterURL}/${envConfig.database}`;
    }
    break;

  case 'test':
  case 'testing':
    {
      const envConfig = require('./test').config;
      baseConfig.port = process.env.PORT || 5000;
      baseConfig.dbURI = `mongodb+srv://${envConfig.username}:${envConfig.password}@${envConfig.clusterURL}/${envConfig.database}?retryWrites=true&w=majority&replicaSet=atlas-o0cppa-shard-0&readPreference=primary`;
    }
    break;

  case 'prod':
  case 'live':
  case 'production':
    {
      const envConfig = require('./prod').config;
      baseConfig.port = process.env.PORT || 5000;
      baseConfig.dbURI = `mongodb+srv://${envConfig.username}:${envConfig.password}@${envConfig.clusterURL}/${envConfig.database}?retryWrites=true&w=majority&replicaSet=atlas-o0cppa-shard-0&readPreference=primary`;
    }
    break;

  default: {
    const envConfig = require('./dev').config;
    baseConfig.port = process.env.PORT || 5000;
    baseConfig.dbURI = `mongodb://${envConfig.clusterURL}/${envConfig.database}`;
  }
}

const environmentConfig = { ...baseConfig };
export default environmentConfig;
