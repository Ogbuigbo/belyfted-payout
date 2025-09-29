module.exports = {
    apps: [
      {
        name: "belyfted-payout-staging-frontend",
        script: "npm",
        args: "run start-dev",
        watch: true, // 👈 Enable watch
        ignore_watch: ["node_modules", ".next", "logs"], // 👈 Ignore these folders
        env: {
          NODE_ENV: "development",
          PORT: 3000,
        },
      },
      {
        name: "belyfted-payout-production-frontend",
        script: "npm",
        args: "run start-prod",
        env: {
          NODE_ENV: "production",
          PORT: 8080,
        },
      },
    ],
  };

//SERVER CONFIGURATION SCRIPT BY ERNEST
//[PM2] Remove init script via:
//$ pm2 unstartup systemd

// pm2 reload ecosystem.config.js     # Reload with zero downtime
// pm2 restart belyfted-staging-frontend             # Restart a specific belyfted app
// pm2 stop belyfted-staging-frontend                # Stop it
// pm2 delete belyfted-staging-frontend              # Delete it
// pm2 logs belyfted-staging-frontend                # View logs

//pm2 start npm --name "belyfted-frotend-app" -- run start-prod

//Start the App with PM2 Using the Config
//pm2 start ecosystem.config.js

//Save the Process & Set Up Auto-Restart on Boot
// pm2 save
// pm2 startup
 

//START STAGGING
//pm2 start npm --name "belyfted-staging-frontend" -- run start-dev
//pm2 start build-and-start-dev.js --name "belyfted-dev" --watch --ignore-watch="node_modules public .next"


//START PRODUCTION
//pm2 start npm --name "belyfted-production-frontend" -- run start-prod
//pm2 start build-and-start-live.js --name "belyfted-live" --watch --ignore-watch="node_modules public .next"