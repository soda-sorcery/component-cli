const fs = require('file-system');
const CryptoJs = require('crypto-js');

const createSCSSFile = (component, shouldUseHash) => {

    const snakeCaseName = component.replace(/[A-Z]/g, '-$&').replace(/-/, '').toLowerCase();


    console.log(`generating component for ${snakeCaseName}`);
    const randomN = ((+(Math.random()*1000).toFixed(3))* 100);
    console.log(`randomN: ${snakeCaseName}${snakeCaseName}`);
    const hashedName = CryptoJs.MD5(`${CryptoJs.MD5(`${snakeCaseName}${randomN}`)}`);
    console.log(`hashedName: ${hashedName}`);

    const className = shouldUseHash ? `${snakeCaseName}-${hashedName}` : `${snakeCaseName}`

    const cssClass = `.${className} {\n\n\n}`;
    console.log(`className: ${snakeCaseName}-${hashedName}`);

    const stream = fs.createWriteStream(`./${component}/index.scss`);
    stream.once('open', (fd) => {
        stream.write(cssClass);
        stream.end();
    });
};

module.exports = createSCSSFile;