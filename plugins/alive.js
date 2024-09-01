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


         await conn.sendMessage(from, { audio: { url: 'https://drive.google.com/uc?export=download&id=11VPnQcNtW3PDt1xZyTD_RJuwPjew7rpo' }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek });

        let status = `Hey There! Bot Online now. 💃🏻♥
Thank You For Using Amda.

👨‍💻 Developer:  Black Amda

👨🏻‍🏫  join support group : https://chat.whatsapp.com/K4mFlZ88QH2E1OPGNZYoPw

💃🏻 Official Website :

 ✨          🖋        ☣          ⇊           
ᴿᵉᵃᶜᵗ        ᴵᵈᵉᵃˢ    ˢʰᵃʳᵉ        ˢᵃᵛᵉ

𝙽𝙾𝚆 𝚄𝚂𝙴𝙳 𝚁𝙰𝙼: ${usedRAM} 𝙼𝙱
𝚄𝙿 𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}
ʙʟᴀᴄᴋ ᴀᴍᴅᴀ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ`

        // URL of the image you want to include
        const imageUrl = 'https://telegra.ph/file/c58b6c133ce2a0233d9d2.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });
        


 } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
})
