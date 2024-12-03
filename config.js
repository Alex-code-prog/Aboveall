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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0h4V1VpZlg5bFI3N3pXWGdNRDlZaUQ3Qi9tOWp5VHhRbUNMVlVFN1lFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2RKd2dYeW5vNWRjVUVtNFg3UXQrWHJKdGdWeEp0TnY0Q2NkRTRZUlFpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TnIwSnJ5UVBDRndBb0NuSk1wSW8yTUFvSkxuZTNXTGQ2WEdlaTJLNTNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabDBPVXlCWkZyV2pQbUxNblJoc3p0OWlzWmlpdysyRUZsMVBNcGRYK3drPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlKbEYzTVdGUE15UlFENWlSZ2VydVBoNjMxQm9RZi8zK095L1FzMENXM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1YR0ErZTVFZVFHMzZueDdYSkx2cC9odEFVZGdhTVI2Ym1sblF2NTM2R0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NhdGJoeTJ1VjViTXE0Uys4UkNpdWRTNXFFTzR3cm5BY3ZUMGhtZHNuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWJBVWFaZlpMcmRXUlJNUE16MXo1Q2EzSjZSV1BzWkpPRHh1MjMxZHNXcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJOcnNKWUFpTjFvU3gxT2JDMXQwME1uWWN1YkZXY2cwamRkQ1VLQjc2RVFxNXgxc1VSUWRWM0Z5dnIwK2ptelRORWpGQURhS0JhbTNKdCthR2poOEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiJ6cWFzMFk2dmY1S2FCcWpocWZXWmNpSnVkOUEyUzR3aWRkeW9MZWQyMS9nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJibEFOa0lkQ1JVQ3Bkc2VfdGhiRkRRIiwicGhvbmVJZCI6IjMxYmUxNWViLTk4YjYtNGZiZi04MjA4LTc3ZDc2YWE1YTVlMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVlltRkhpU2RRNmlKSGFvZFdEL0ZFazN4Z0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSytsY1Rud3h6YmpKWmxVaTBqTURKTVVoUHZjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZNQjRQQjY5IiwibWUiOnsiaWQiOiIyMzQ4MDMyMTgwNzQ0Ojk3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkBBWUQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xMRjhkOEJFTG14dTdvR0dDTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5hOUpOT3FOY3B6Z05DWFVXQjZOb1hIRzJVK1R4OWtCeUU3M1VKRWROV0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJ1ZmExU3p6dWlJMTdSaFhSUFROdFpMTG9EdnBHZUUrK1hlTEVQbmtpV2ZhK01nMm1SQ1hTOExxQXNzc1dzTnV6anR5T2xaK01iWmphRmRwODA4RURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5QWhHV1hnNXZ3dDhFVHdJMVoxbkMzZjRrNmNsempmYUorSW5tVk5VQUl6OVo3eWpxazhUQ3lxNGZlc0ZQZFJqVjFVbnFzRThzZmo4ZnRlN0pURkpBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMzIxODA3NDQ6OTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFd2U1RUcWpYS2M0RFFsMUZnZWphRnh4dGxQazhmWkFjaE85MUNSSFRWaCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzIyMDU1MX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "?",
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
