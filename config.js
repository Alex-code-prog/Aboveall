//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Aboveall";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vas9N7MBA1f0yw8dZ515";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vas9N7MBA1f0yw8dZ515";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/U1oSe2y";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "2349071978357";
global.owner = process.env.OWNER_NUMBER || "2348032180744";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/U1oSe2y";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0E2dk5PQW9RZUV6eUdsemdpQmZGblNHa0N0L01LRzdsNDBqSmVxcUVtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmtuUFlON0FsYitKYnVtVjc2WGdzSXkxeFJrcjhjQjJMZWZ6dlVQTHpDdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPT1FlU3ZyRjAvQk9hNjVaTWlPNi95NGE0Y0dKNHN2a0M3MjhHeUhLOFdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDOHMrdm1Jc3lsejhhMFBEMFlWMWY5bVVYSk5LQ3FNdzYxdVhJekRFNWxzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHS0NHNkRQQVVvZU0wbmk2bysyTEtLWkV1SUN4YWhTUkxWQUZjd0dOWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRlNTc4UHkwUDVtQVNTR1VEZVY0RW9UcjhteVIwaHF0NUl2bGQwWmxCSFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUl5Yzk0bWwzbUpNc05Kb0wvZ1Q5UzZhL2xMcmU4S0xJZTdRc1Y5YXgwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1RiUmkraGFBY0IxTDJWYTREZXp6RGhLVUJsWTQwdnp0UENQcHUvUmEycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldZSmJuZ0NVR1dDTDFwQXU5T2tPZjRtVUhES0d3MlFqZXE2Z2pCK2ZvMysvcFBQWjVYWTFCbndXcXdCc2lCMXg1OGNsN2Q2clRaaUVONjVrOHE4Z2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6IkllRGhSUzkwZlNxTE85KzFBT1RRZm1OV21XSys3cllGSCtJNFRqMWsyb289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxxRTJmemlkU25XRlhZbnAtdzgyQkEiLCJwaG9uZUlkIjoiNzhjYWZkNjctODVmMi00NTkwLTk4NGItNzFjN2YzNzc3MmI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKSE9YM2dxOUFLRHlpQ0pJSnZqazFmeTY1bz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMGxmRzBBQVVOVnJBeUZaSERqWDFQTTVQcGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU041R0xGUzciLCJtZSI6eyJpZCI6IjIzNDgwMzIxODA3NDQ6OThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQEFZRCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTExGOGQ4QkVLN0Z1N29HR0NRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmE5Sk5PcU5jcHpnTkNYVVdCNk5vWEhHMlUrVHg5a0J5RTczVUpFZE5XRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidlFsM2Vsc3ZSSGlzb0pOMnMyOUdVN0JiV2ludXU4S3RWc1BqUTJUU0c1V25rK05JSFBMWFE4RUlvNW5nRllMWVU4Nzhwbm9GQzlwakZXNklveE9FQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImphWFJWUDNtMFV2VXRXanVGb2V5RUJKSkJBMXdTc3JtZnYzZHdMbVdHVTJja09scjdkRS9rY2lvYkJndVU0cVZBVnEvaFV3NlNPME9vQWdwdzFzRmp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODAzMjE4MDc0NDo5OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUV3ZTVFRxalhLYzREUWwxRmdlamFGeHh0bFBrOGZaQWNoTzkxQ1JIVFZoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzMjIzMDk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVKQyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "Jᴜᴘɪᴛᴇʀʙᴏʟᴅ99 ☠️👑🌍",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
