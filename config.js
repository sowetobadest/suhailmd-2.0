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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_10_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg5LFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgODAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExLFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2LFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVVBFSk9ndnJrMXNjdTBXOEFhR1NaWVNsN29WSThHWWRPdVE2U0NlcTRCdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWNGZHFxZUJTR2VGYzJYS0NDOGxVZ1wiLFxuICBcInBob25lSWRcIjogXCIzMzI5NDgwYi0yYTYxLTRlMjMtOTQ5Ny0zZTEwM2JjN2M1NTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgMTgzLFxuICAgICAgMzEsXG4gICAgICAxNDQsXG4gICAgICAzOSxcbiAgICAgIDMyLFxuICAgICAgODAsXG4gICAgICAyMTEsXG4gICAgICAyNTMsXG4gICAgICAyMDksXG4gICAgICAxMDEsXG4gICAgICAxMDcsXG4gICAgICAxMDYsXG4gICAgICAyMyxcbiAgICAgIDI0MixcbiAgICAgIDIxNSxcbiAgICAgIDIxNCxcbiAgICAgIDExOSxcbiAgICAgIDkzLFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgNzgsXG4gICAgICAyMzMsXG4gICAgICA2NSxcbiAgICAgIDY4LFxuICAgICAgMjI1LFxuICAgICAgMjIsXG4gICAgICAzNyxcbiAgICAgIDc0LFxuICAgICAgMTY1LFxuICAgICAgMTEsXG4gICAgICAxNTMsXG4gICAgICAxNDgsXG4gICAgICA5NCxcbiAgICAgIDE4OCxcbiAgICAgIDE0MCxcbiAgICAgIDgyLFxuICAgICAgMjQ4LFxuICAgICAgMTI4LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNHTFhGRVM1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDc1MDEwMjA6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM5MTk2Mzc0ODg0NjAxOjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0piYXBKY0VFSmYvNkxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTVJlM1I4YnBxMEZiS3BXb2hKRHd4NFZ2MzlEM2lXcjYwZGdESHJBdTNCUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBMXp5Q2dXQk5lNEsvcnJwL2hIK0Z2bmRBb1g3SFhiK3BlaEEyWTB2bWRrM1NRU0hRVXJWY0RIVnMrTVZ2TnkvS2tOcXR4ckZGbjJBUjJRUXFURlVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpTndIbEtUOGVsOFVXOG1zazBxTGUyQStXTDdlME10aFpjQkdtdGRPTlc5L2NQVzhJSlRhQ3M1TGJUVlZjSEp1bzJsMXozRGtxU1Q2U0hlVzFHVUNEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDc1MDEwMjA6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODcwNjE5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
