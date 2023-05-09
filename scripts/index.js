const fs = require('fs');

const astronauts = require("./atomicassets/astronauts.json");

fs.writeFileSync("data.json", JSON.stringify(astronauts.data.map(item => {
  const data = item.data;
  delete data.website;
  delete data.name;
  delete data.about;
  delete data.backimg;
  delete data.context;
  for ( const key of Object.keys(data) ) {
    if (data[key] === "None") {
      delete data[key];
    }
  }
  return {
    asset_id: Number(item.asset_id),
    template_mint: Number(item.template_mint),
    data,
  }
}).sort((a, b) => a.template_mint - b.template_mint), null, 2));

console.log(astronauts.data.length)