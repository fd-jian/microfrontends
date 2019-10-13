const fs = require('fs');

const assetManifest = JSON.parse(
    fs.readFileSync('./target/search/asset-manifest.json')
);

fs.writeFileSync('./target/search/component-manifest.json',
    JSON.stringify(
        { scripts: [assetManifest.files['main.js']] }
    )
);

