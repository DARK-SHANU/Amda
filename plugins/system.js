const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const speedTest = require('speedtest-net'); 

cmd({
    pattern: "system",
    alias: ["status", "botinfo", "runtime", "uptime","ping"],
    desc: "Check uptime, RAM usage, network speed, and more",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Calculate ping with delay
        const start = Date.now();
        await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay
        const end = Date.now();
        const ping = end - start;

        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        // Network speed test
        const speed = await speedTest({ acceptLicense: true });
        const downloadSpeed = (speed.download.bandwidth / 125000).toFixed(2); // Convert from bits/sec to MB/sec
        const uploadSpeed = (speed.upload.bandwidth / 125000).toFixed(2); // Convert from bits/sec to MB/sec

        let status = `
          
╭─「 𝗕𝗟𝗔𝗖𝗞 𝗔𝗠𝗗𝗔 𝗦𝗬𝗦𝗧𝗘𝗠 𝗦𝗧𝗔𝗧𝗨𝗦」
│
│ ◈ *⌚ 𝗥𝗨𝗡 𝗧𝗜𝗠𝗘:*  ${runtime(process.uptime())}  
│
│ ◈ *🕹 𝗥𝗔𝗠 𝗨𝗦𝗔𝗚𝗘:*
│      ╰───── *𝚄𝚜𝚎𝚍*: ${usedRAM} MB
│      ╰───── *𝙵𝚛𝚎𝚎*: ${freeRAM} MB
│      ╰───── *𝚃𝚘𝚝𝚊𝚕*: ${totalRAM} MB
│
│ ◈ *📡 𝗣𝗶𝗻𝗴:* ${ping} ms
│
│ ◈ *🌐 𝗡𝗲𝘁𝘄𝗼𝗿𝗸 𝗦𝗽𝗲𝗲𝗱:*
│       ╰───── *𝙳𝚘𝚠𝚗𝚕𝚘𝚍*: ${downloadSpeed} MB/sec
│       ╰───── *𝚄𝚙𝚕𝚘𝚊𝚍*: ${uploadSpeed} MB/sec
│
│ ◈ *🏠 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲:* 𝚄𝙱𝚄𝙽𝚃𝚄 𝚅𝙿𝚂
│
│ ◈ *👨‍💻 𝗢𝘄𝗻𝗲𝗿:* 𝙱𝙻𝙰𝙲𝙺 𝙰𝙼𝙳𝙰
│
│   ʙʟᴀᴄᴋ ᴀᴍᴅᴀ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ`;
╰───────────────────────────────●●► 

        // URL of the image you want to include
        const imageUrl = 'https://telegra.ph/file/c58b6c133ce2a0233d9d2.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
