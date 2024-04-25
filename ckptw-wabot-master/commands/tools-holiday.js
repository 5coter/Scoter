const {
    createAPIUrl
} = require('../lib/api.js');
const {
    bold
} = require('@mengkodingan/ckptw');

module.exports = {
    name: 'holiday',
    aliases: ['libur', 'harilibur'],
    category: 'tools',
    code: async (ctx) => {
        try {
            const month = new Date().getMonth() + 1;
            const apiUrl = createAPIUrl('https://api-harilibur.vercel.app', '/api', {
                month: month
            });
            const data = await fetch(apiUrl)
                .then(res => res.ok ? res.json() : null)
                .catch(err => null);

            if (!data.length) return ctx.reply(`${bold('[ ! ]')} Tidak ada hari libur di bulan ini.`);

            return ctx.reply(
                `${bold('❖ Holiday')}\n` +
                '\n' +
                data.reverse().map((h, i) => {
                    const d = new Date(h.holiday_date);
                    const day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][d.getDay()];
                    const mon = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'][d.getMonth()];
                    const year = d.getFullYear();
                    return `${bold(h.holiday_name)}\n➤ ${day}, ${d.getDate()} ${mon} ${year}`;
                }).join('\n-----\n') +
                '\n' +
                '\n' +
                `${global.msg.footer}`
            );
        } catch (error) {
            console.error('Error:', error);
            return ctx.reply(`${bold('[ ! ]')} Terjadi kesalahan: ${error.message}`);
        }
    }
};