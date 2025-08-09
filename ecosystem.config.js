module.exports = {
  apps: [
    {
      name: 'simple-hide-ai-landing',
      cwd: __dirname,
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
    },
  ],
}; 