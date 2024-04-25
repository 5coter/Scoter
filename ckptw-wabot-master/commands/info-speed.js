const {
    bold
} = require('@mengkodingan/ckptw');
const {
    performance
} = require('perf_hooks');

module.exports = {
    name: 'speed',
    category: 'info',
    code: async (ctx) => {
        try {
            const pOld = performance.now();
            const res = await ctx.reply('Menguji kecepatan...');
            const speed = (performance.now() - pOld).toFixed(2);
            return ctx.editMessage(res.key, `Merespon dalam ${speed} ms.`);
        } catch (error) {
            console.error('Error:', error);
            return ctx.reply(`${bold('[ ! ]')} Terjadi kesalahan: ${error.message}`);
        }
    }
};