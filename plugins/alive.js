const config = require('../config')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "Check uptime, RAM usage, and more",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        let status = `*𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲 𝗡𝗼𝘄 ♥*

*Support Us ⤵*
𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 - https://whatsapp.com/channel/0029
𝚈𝚘𝚞𝚝𝚞𝚋𝚎 - https://youtube.com/
𝚆𝚎𝚋 𝚂𝚒𝚝𝚎 - vercel.app

𝙽𝙾𝚆 𝚄𝚂𝙴𝙳 𝚁𝙰𝙼: ${usedRAM} 𝙼𝙱
𝚄𝙿 𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}
ᶜʳᵉᵃᵗᵉ ᵇʸ ᴬᵐᵈᵃ`

        // URL of the image you want to include
        const imageUrl = 'https://telegra.ph/file/c58b6c133ce2a0233d9d2.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });
        
   await conn.sendMessage(from, { audio: { url: 'https://drive.google.com/uc?export=download&id=1QH9r2sEBGpOD2GKCj3ACpIc1f1FdocVJ' }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek });

 } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
})
