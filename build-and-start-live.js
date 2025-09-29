const { exec } = require("child_process");

console.log("🛠 Running production build...");

exec("npm run build", (err, stdout, stderr) => {
  if (err) {
    console.error(`❌ Build Production app failed:\n${stderr}`);
    return;
  }
  console.log(`✅ Build successful:\n${stdout}`);

  console.log("🚀 Restarting Production app with PM2...");
  exec("pm2 restart belyfted-payout-production-frontend", (err, stdout, stderr) => {
    if (err) {
      console.error(`❌ Restart Production app failed:\n${stderr}`);
      return;
    }
    console.log(`✅ Production App restarted:\n${stdout}`);
  });
});
