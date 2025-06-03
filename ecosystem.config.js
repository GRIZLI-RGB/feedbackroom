module.exports = {
  apps: [
    {
      name: "client",
      cwd: "./client",
      script: "sh",
      args: "-c \"pnpm start\"",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
    {
      name: "server",
      cwd: "./server",
      script: "sh",
      args: "-c \"pnpm start\"",
      env: {
        NODE_ENV: "production",
        PORT: 8000,
      },
    },
  ],
};
