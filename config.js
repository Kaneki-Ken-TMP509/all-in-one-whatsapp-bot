const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348110572387";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_03_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg2LFxuICAgICAgICA4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1LFxuICAgICAgICAzMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIno4S2NsSUxCK01kT21kZUp1S3BQMFY3SG93RGt1Z0YyYUpPRlpYNlRZMEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBTSDF2UmxGU255d2JmUmpnS0VacFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjNlMzk4YTktYTUxYS00OWRhLTk5YWQtZjlhMjQ2MjhmMjg4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDIxNyxcbiAgICAgIDIyOSxcbiAgICAgIDg4LFxuICAgICAgOTksXG4gICAgICAyNDAsXG4gICAgICAxNixcbiAgICAgIDIxMSxcbiAgICAgIDk2LFxuICAgICAgNzcsXG4gICAgICA3OCxcbiAgICAgIDEzNyxcbiAgICAgIDIxNCxcbiAgICAgIDE5OSxcbiAgICAgIDIsXG4gICAgICAyMzMsXG4gICAgICA2MCxcbiAgICAgIDE2NCxcbiAgICAgIDEyMyxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAxNDYsXG4gICAgICAyMjQsXG4gICAgICAyMjMsXG4gICAgICAyOSxcbiAgICAgIDE5MCxcbiAgICAgIDIzNixcbiAgICAgIDQyLFxuICAgICAgMTE5LFxuICAgICAgMjMzLFxuICAgICAgMTQ5LFxuICAgICAgOTgsXG4gICAgICAyMzYsXG4gICAgICAxMjQsXG4gICAgICAxMDAsXG4gICAgICAxOTAsXG4gICAgICAxNjUsXG4gICAgICAyMTgsXG4gICAgICAyMzYsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxIUE1YUFdLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODg4OTQ4Mjk6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMDU4MDM0MjA0Nzc5OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01pMThwb0ZFUEdqbmJnR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieUd5R0p5NmVTdFlVLzNjSWRoNHVTTW9QYzA2ZUUrQ2JEOHhMTGJxYmJrZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnL09IWC8zbURJZUhHR1JtOGs3TUMyaktPZ1llZXU5V0JVSi9PR3R2S1dBY0FhemZxZlhYL0lKeU56NGtPS2tzNDlFcXdaNHJiekVzbnBxWktZdGxCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjenVTQjl5ajdUSytqa0w1UXBYT2tzZGVGdVlWemdBT0FPd0xtbENNTlhmOVJ3VHpDNGdNblN4eStHRUJIR3RBanhqL1kya2JMT2Qza0ZoWk1qblFqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODg4OTQ4Mjk6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODUzMjk4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc3Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzdjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMmdTanB4N2s0dGhtMGpCRDYySHdhS3I1ZCtiejY5VzFxaVRwM243d3l5Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzk4NTc3ODY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg1MDcxMDA5NTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
