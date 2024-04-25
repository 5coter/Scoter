const {
    createAPIUrl
} = require('../lib/api.js');
const {
    bold,
    monospace
} = require('@mengkodingan/ckptw');

module.exports = {
    name: 'cekhadits',
    category: 'islamic',
    code: async (ctx) => {
        const input = ctx._args.join(' ');

        if (!input) return ctx.reply(
            `${global.msg.argument}\n` +
            `Contoh: ${monospace(`${ctx._used.prefix + ctx._used.command} إنما الأعمال بالنيات`)}`
        );

        try {
            const apiUrl = createAPIUrl('http://dorar.net', '/dorar_api.json', {
                skey: input
            });
            const response = await fetch(apiUrl);

            if (!response.ok) throw new Error(global.msg.notFound);

            const data = await response.json();
            let ahadith = data.ahadith.result;
            ahadith = ahadith.replace(/<a[^>]*>المزيد<\/a>/g, '');
            const formattedAhadith = ahadith.replace(/<[^>]*>/g, '').trim();

            return ctx.reply(formattedAhadith);
        } catch (error) {
            console.error('Error:', error);
            return ctx.reply(`${bold('[ ! ]')} Terjadi kesalahan: ${error.message}`);
        }
    }
};