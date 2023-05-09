const data = require('./data');
const template_mints = [
    160,
    224,
    410,
    411,
    422,
    518,
    540,
    552,
    578,
    63,
    631,
    658,
    782,
    791,
    873,
    904,
    917,
    963,
    966,
];
const mints = new Map(data.map(item => {
    return [item.template_mint, item]
}));

for ( const template_mint of template_mints ) {
    console.log(mints.get(template_mint).asset_id, template_mint);
}