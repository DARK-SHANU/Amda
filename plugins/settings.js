const { cmd, commands } = require('../command');

cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        return await conn.sendMessage(from, {
            image: { url: 'https://telegra.ph/file/c58b6c133ce2a0233d9d2.jpg' },
            caption: 
                
╭──「'⚙Black Amda Settings List」───●●►
│               
│  ┌──────────────        
│  ├─\n\n*Alive IMG*\n.update ALIVE_IMG: Your Image Url
│  ├─\n\n*Alive MSG*\n.update ALIVE_MSG: Your Alive MSG 
│  └──────────────
│
│  ┌──────────────        
│  ├─\n\n*Menu IMG*\n.update Menu_IMG: Your Image Url  
│  ├─\n\n*Menu MSG*\n.update Menu_MSG: Your Menu MSG
│  └──────────────
│
│  ┌──────────────
│  ├─ ►\n\n*AUTO REED STATUS*\n.update AUTO_READ_STATUS:
│  ├─ 🔛 Enable 
│  ├─ 📴 Disable 
│  └──────────────
│
│  ┌──────────────
│  ├─ ►\n\n*WORK_TYPE*\n.update WORK_TYPE: 
│  ├─ 👤 private
│  ├─ 👥 public 
│  ├─ 📥👥 index or group
│  └──────────────
│
│  ┌──────────────
│  ├─ ►\n\n*Prefix*\n.update PERFIX: your prefix (
│  | Set . as the prefix
│  | Set , as the prefix
│  | Set ! as the prefix
│  | Set @ as the prefix
│  | Set # as the prefix
│  | Set $ as the prefix
│  | Set % as the prefix
│  | Set ^ as the prefix
│  | Set & as the prefix
│  | Set * as the prefix
│  | Set + as the prefix
│  | Set = as the prefix
│  | Set / as the prefix
│  | Set - as the prefix
│  | Set : as the prefix
│  | Set ~ as the prefix )
│  
│   ʙʟᴀᴄᴋ ᴀᴍᴅᴀ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ
╰───────────────────────────────────●●►
         
        
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
