const {
    handler
} = require('../handler.js');
const {
    bold
} = require('@mengkodingan/ckptw');

module.exports = {
    name: 'tagme',
    category: 'group',
    code: async (ctx) => {
        const handlerObj = await handler(ctx, {
            group: true
        });

        if (handlerObj.status) return ctx.reply(handlerObj.message);

        try {
            return ctx.reply({
                text: `@${ctx._sender.jid.split('@')[0]}`,
                mentions: [ctx._sender.jid]
            });
        } catch (error) {
            console.error('Error:', error);
            return ctx.reply(`${bold('[ ! ]')} Terjadi kesalahan: ${error.message}`);
        }
    }
};