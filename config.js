const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nairobi/Africa";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254707501020,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_01_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgODUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDM5LFxuICAgICAgICA2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJraTMwblNTYXZHUTJWdkFrNHdEYkxCa1dvZ0lMeHlSbDR0K3NsMXF1TXFzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwNzUwMTAyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjhCQTUxQkZEMTNFNjdCQkNGM0E4QjQ5ODg0RDAzNDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxODQxMjYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzA3NTAxMDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MzgwRTFBNzUzMUZGQjhEREU2NEYwNjY3NUE2RTlEQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE4NDEyNjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZDBTMWU2U1ZUN0tRcC1FYXM2c1lvd1wiLFxuICBcInBob25lSWRcIjogXCI2MzNiNmZhNy0xNmIyLTRiM2ItYTIxNy04ZWJiZjc0NGRkMTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICAyLFxuICAgICAgMjQzLFxuICAgICAgMTIyLFxuICAgICAgMjgsXG4gICAgICAzOSxcbiAgICAgIDExOCxcbiAgICAgIDE0MCxcbiAgICAgIDcxLFxuICAgICAgMjE1LFxuICAgICAgMjA4LFxuICAgICAgMTExLFxuICAgICAgMjMzLFxuICAgICAgOTYsXG4gICAgICAyMjgsXG4gICAgICA4NyxcbiAgICAgIDY0LFxuICAgICAgNDYsXG4gICAgICAyMjAsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICA3OSxcbiAgICAgIDE2MyxcbiAgICAgIDM0LFxuICAgICAgNzMsXG4gICAgICAxODEsXG4gICAgICAxNjEsXG4gICAgICAxOTgsXG4gICAgICA1NSxcbiAgICAgIDE2OSxcbiAgICAgIDI0MCxcbiAgICAgIDIwNyxcbiAgICAgIDE4MyxcbiAgICAgIDI1MSxcbiAgICAgIDE0LFxuICAgICAgMjA2LFxuICAgICAgODIsXG4gICAgICAxODEsXG4gICAgICAyMTIsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUk1OSlY1SlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNzUwMTAyMDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzkxOTYzNzQ4ODQ2MDE6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwic293ZXRvIGJhZGVzdFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMYXBKY0VFTXlaNTdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTVJlM1I4YnBxMEZiS3BXb2hKRHd4NFZ2MzlEM2lXcjYwZGdESHJBdTNCUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTY3pQV3Q5WlZpQzNpWEVydmdVN3VhanJzQkFrSEtPL2c4QUZqdWgxekQ5VCtGalFQSDcwdTJNeG1iVVpJR1QrVHZzVU1OUDNPYWdSL0thTWJidHlCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKYTd4bE9tNzF0aFlOOWRQODFlZnlEZ0RSWVgxTzFCMS9kNVJwR0FuZnJ3MWh6M1hEc2VWZzZ1M01wRzRnQUNhSDYrVzE5TDM5NWRibEFyVVlveFhodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDc1MDEwMjA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODQxMjMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSitVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKK1UuanNvbiI6IHt9Cn0=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
