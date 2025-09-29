const { exec } = require("child_process");

console.log("🛠 Running build...");

exec("npm run build", (err, stdout, stderr) => {
  if (err) {
    console.error(`❌ Build staging app failed:\n${stderr}`);
    return;
  }
  console.log(`✅ Build successful:\n${stdout}`);

  console.log("🚀 Restarting Stagging app with PM2...");
  exec("pm2 restart belyfted-payout-frontend", (err, stdout, stderr) => {
    if (err) {
      console.error(`❌ Restart staging app failed:\n${stderr}`);
      return;
    }
    console.log(`✅ Stagging App restarted:\n${stdout}`);
  });
});
