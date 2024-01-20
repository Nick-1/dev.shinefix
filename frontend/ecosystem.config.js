module.exports = {
  apps : [{
    name: 'shinefix-front',
    script: 'npm',
    args: 'run start',
    env_production: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_BACKEND: 'http://api-v1.shinefix.pro',
    }
  }]
};
