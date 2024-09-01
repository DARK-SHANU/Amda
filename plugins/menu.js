const config = require('../config')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["panel","penal","list","allmenu"],
    desc: "Check menu all",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        let status = `*𝐁𝐋𝐀𝐂𝐊 𝐀𝐌𝐃𝐀*


╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *𝚁𝚄𝙽𝚃𝙸𝙼𝙴* - ${runtime(process.uptime())}     
│◈ *𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴*
│     ╰───── *𝚄𝚜𝚎𝚍*: ${usedRAM} MB
│     ╰───── *𝙵𝚛𝚎𝚎*: ${freeRAM} MB
│     ╰───── *𝚃𝚘𝚝𝚊𝚕*: ${totalRAM} MB
╰──────────●●►
╭──────────●●►
│📜 MAIN COMMANDS
│   ───────
│► .bingen
│► .dictionary
│► .readmore
│► .device
│► .tempmail
│► .newgroup
│► .delgroup
│► .save
│► .block
│► .unblock
│► .help
│► .id
│► .settings
│► .apply
│► .defaultimg
│► .defaultsudo
│► .news
│► .logo
│► .script
│► .alive
│► .jid
│► .system
│► .restart
│► .join
│► .ping
│► .list
│► .menu
╰───────────●●►
╭───────────●●►
│⬇ DOWNLOAD COMMANDS
│   ───────
│► .downurl
│► .movie
│► .download
│► .threads
│► .twitter
│► .pinterest
│► .sisub
│► .fb2
│► .capcut
│► .gitclone
│► .tiktok
│► .fb
│► .ig
│► .apk
│► .fmmod
│► .gdrive
│► .mediafire
│► .ss
│► .video
│► .song
│► .spotify
│► .img
│► .xvdl
╰───────────●●►
╭───────────●●►
│🔱 GROUP COMMANDS
│   ───────
│► .gdp
│► .automute
│► .autounmute
│► .ban
│► .unban
│► .invite
│► .mute
│► .unmute
│► .promote
│► .demote
│► .kick
│► .hidetag
│► .add
│► .gdesc
│► .gname
│► .left
│► .antispam
│► .del
╰───────────●●►
╭───────────●●►
│👨‍💻 OWNER COMMANDS
│   ───────
│► .removesticker
│► .resetsticker
│► .getsticker
│► .addsticker
│► .addbad
│► .resetbad
│► .getbad
│► .resetvoice
│► .removevoice
│► .getvoice
│► .addvoice
│► .replacereply
│► .removereply
│► .getreply
│► .resetreply
│► .addreply
│► .eval
│► .send
│► .enc
│► .dec
│► .boom
│► .vv
│► .tovv
│► .dp
│► .sendaudio
│► .sendtag
│► .sendmsg
│► .remove
│► .repostatus
│► .report
│► .quote
│► .alljid
│► .about
│► .name
╰───────────●●►
╭───────────●●►
│🔗 CONVERT COMMANDS
│   ───────
│► .emoji
│► .blur
│► .toaudio
│► .toptt
│► .remini
│► .img2qr
│► .removebg
│► .toqr
│► .surl
│► .tts
│► .wame
│► .img2url
│► .fancy
│► .trt
│► .toimg
│► .pdf
│► .edit
│► .emomix
╰───────────●●►
╭───────────●●►
│🤖 AI COMMANDS
│   ───────
│► .gemini
│► .imagine
│► .gpt
╰───────────●●►
╭───────────●●►
│🫧 MATH COMMANDS
│   ───────
│► .mathstep
│► .math
│► .cal
╰───────────●●►
╭───────────●●►
│🔍SEARCH COMMANDS
│   ───────
│► .findapk
│► .sporty
│► .mobilenews
│► .ip
│► .cric
│► .find
│► .yts
│► .npm
│► .wabeta
│► .movieinfo
│► .weather
│► .lyrics
│► .cmd
│► .git
╰───────────●●►
ᴀᴍᴅᴀ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ`

        // URL of the image you want to include
        const imageUrl = 'https://telegra.ph/file/cef9e06c2bb1935ac36ee.jpg'; // Replace with your actual image URL

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
