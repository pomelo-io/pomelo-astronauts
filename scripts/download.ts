#!/usr/bin/env node
import data from '../data.json';
import fs from 'node:fs';

(async () => {
    for ( const row of data ) {
        const url = `https://ipfs.pinax.network/ipfs/${row.data.img}`;
        const filename = `./images/${row.template_mint}-${row.asset_id}-${row.data.img}.png`;
        const response = await fetch(url);
        if ( !response.body ) continue;
        const buffer = await response.arrayBuffer();
        // const writer = fs.createWriteStream(filename);
        // writer.write(await response.arrayBuffer)
        fs.writeFileSync(filename, Buffer.from(buffer))
        console.log(filename);
    }
})();