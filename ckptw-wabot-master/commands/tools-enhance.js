const {
    createAPIUrl
} = require('../lib/api.js');
const {
    download,
    getImageLink
} = require('../lib/simple.js');
const {
    bold,
    monospace
} = require('@mengkodingan/ckptw');
const {
    MessageType
} = require('@mengkodingan/ckptw/lib/Constant');

module.exports = {
    name: 'enhance',
    aliases: ['hd'],
    category: 'tools',
    code: async (ctx) => {
        const msgType = ctx.getMessageType();
        const quotedMessage = ctx._msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;

        if (msgType !== MessageType.imageMessage && msgType !== MessageType.videoMessage && !quotedMessage) return ctx.reply(`${bold('[ ! ]')} Berikan atau balas media berupa gambar!`);

        try {
            const type = quotedMessage ? ctx._self.getContentType(quotedMessage) : null;
            const object = type ? quotedMessage[type] : null;

            const buffer = (type === 'imageMessage') ? await download(object, type.slice(0, -7)) : await ctx.getMediaMessage(ctx._msg, 'buffer');

            const imageLink = await getImageLink(buffer);
            const apiUrl = createAPIUrl('itzpire', `/tools/enhance`, {
                url: imageLink,
                type: 'modelx4'
            });
            const response = await fetch(apiUrl);
            const data = await response.json();

            return await ctx.reply({
                image: {
                    url: data.result.img
                },
                caption: null
            });
        } catch (error) {
            console.error('Error', error);
            return ctx.reply(`${bold('[ ! ]')} Terjadi kesalahan: ${error.message}`);
        }
    }
};