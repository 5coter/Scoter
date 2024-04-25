const package = require('./package.json');
const {
    bold,
    quote
} = require('@mengkodingan/ckptw');

// API Key.
global.apiKey = {
    imgbb: 'REPLACE_THIS_WITH_YOUR_API_KEY', // Get it at: https://id.imgbb.com/
    lowline: 'REPLACE_THIS_WITH_YOUR_API_KEY' // Get it at: https://chat.openai.com/ (Optional)
};

// Bot.
global.bot = {
    name: 'Rei Ayanami',
    prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i,
    thumbnail: 'https://camo.githubusercontent.com/a71a3d7b6e8cee0a85fe87e32cfd860a034603b97bbb8fb98d2a12828d6a3005/68747470733a2f2f696d61676573332e616c706861636f646572732e636f6d2f3636322f7468756d622d3335302d3636323231392e706e67',
    groupChat: 'https://chat.whatsapp.com/GTGyuaQlo5XB0l8dHn4n9A'
};

// MSG (Message).
global.msg = {
    // Command access.
    admin: `${bold('[ ! ]')} Perintah hanya dapat diakses oleh admin grup!`,
    botAdmin: `${bold('[ ! ]')} Bot bukan admin, tidak bisa menggunakan perintah!`,
    owner: `${bold('[ ! ]')} Perintah hanya dapat diakses Owner!`,
    group: `${bold('[ ! ]')} Perintah hanya dapat diakses dalam grup!`,
    private: `${bold('[ ! ]')} Perintah hanya dapat diakses dalam obrolan pribadi!`,

    // Command interface.
    watermark: `${package.name}@^${package.version}`,
    footer: quote('Dibuat oleh ItsReimau | Take care of yourself.'),
    readmore: '\u200E'.repeat(4001),

    // Command process.
    argument: `${bold('[ ! ]')} Masukkan argumen!`,
    wait: `${bold('[ ! ]')} Tunggu sebentar...`,

    // Command process (Error).
    notFound: `Tidak ada yang ditemukan!`,
    urlInvalid: `URL tidak valid!`
};

// Owner.
global.owner = {
    name: 'Exrrr',
    number: '6283138426074',
    organization: 'Barudak'
};

// Sticker.
global.sticker = {
    packname: 'Take care of yourself.',
    author: '@scoter_09'
};

// System.
global.system = {
    startTime: null,
    timeZone: 'Asia/Makassar'
};