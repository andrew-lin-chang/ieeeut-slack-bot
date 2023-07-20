const { App } = require("@slack/bolt");
const { printUpcomingEvents } = require("./modules/calendar");

require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000,
});

app.command("/events", printUpcomingEvents);

(async () => {
  // Start your app
  await app.start();
  console.log("Bot is running!");
})();