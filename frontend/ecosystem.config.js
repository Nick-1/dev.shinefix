module.exports = {
  apps : [{
    name: "shinefix-front",
    script: "npm",
    // args: "run start",
    args: "run dev",
    env_production: {
      NEXT_PUBLIC_BACKEND: 'http://api-v1.shinefix.pro',
    }
  }]
};
