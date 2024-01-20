module.exports = {
  apps: [
    {
      name: 'shinefix-back',
      script: 'npm',
      // args: 'run start:prod',
      args: 'run start:debug',
      env_production: {
        FRONTEND: 'http://keri4.shinefix.pro',
      },
    },
  ],
};
