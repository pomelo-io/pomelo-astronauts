const ords = require('../ord.pomelo/ords.json');
const data = require('../data.json');

console.log([
    'asset_id',
    'template_mint',
    'from',
    'transfer_time',
    'bech32_bitcoin_address',
    'img',
].join(","))

const mints = new Map();
for ( const row of data ) {
    mints[row.asset_id] = row;
}

for ( const row of ords.rows ) {
    const mint = mints[row.asset_id];
    console.log([
        row.asset_id,
        mint.template_mint,
        row.from,
        row.transfer_time,
        row.bech32_bitcoin_address,
        mint.data.img
    ].join(","))
}