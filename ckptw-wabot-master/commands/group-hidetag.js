const {
    handler
} = require('../handler.js');
const {
    bold
} = require('@mengkodingan/ckptw');

module.exports = {
    name: 'hidetag',
    category: 'group',
    code: async (ctx) => {
        const handlerObj = await handler(ctx, {
            admin: true,
            group: true
        });

        if (handlerObj.status) return ctx.reply(handlerObj.message);

        const input = ctx._args.join(' ');

        try {
            const data = await ctx._client.groupMetadata(ctx.id);
            const len = data.participants.length;
            const mentions = [];
            for (let i = 0; i < len; i++) {
                const serialized = data.participants[i].id.split('@')[0];
                mentions.push({
                    tag: `@${serialized}`,
                    mention: `${serialized}@s.whatsapp.net`
                });
            }

            return ctx.reply({
                text: `${input || '@everyone'}`,
                mentions: mentions.map((mention) => mention.mention),
            });
        } catch (error) {
            console.error('Error:', error);
            return ctx.reply(`${bold('[ ! ]')} Terjadi kesalahan: ${error.message}`);
        }
    }
};