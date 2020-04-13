module.exports = {
  apps : [{
    name: 'document-management',
    script: 'npm',
    args: 'run prod',
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
