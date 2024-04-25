const {
    createAPIUrl
} = require('../lib/api.js');
const {
    bold
} = require('@mengkodingan/ckptw')

module.exports = {
    name: 'meme',
    category: 'fun',
    code: async (ctx) => {
        const apiUrl = createAPIUrl('https://candaan-api.vercel.app', '/api/image/random', {});

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const imageUrl = data.data.url;

            if (!imageUrl) throw new Error(global.msg.notFound);

            return ctx.reply({
                image: {
                    url: imageUrl
                },
                caption: `❖ ${bold('Meme')}\n` +
                    '\n' +
                    `➤ Sumber: ${data.data.source}\n` +
                    '\n' +
                    global.msg.footer,
            });
        } catch (error) {
            console.error('Error:', error);
            return ctx.reply(`${bold('[ ! ]')} Terjadi kesalahan: ${error.message}`);
        }
    }
};