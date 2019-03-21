const fs = require('file-system');
const CryptoJs = require('crypto-js');

const createSCSSFile = (component, shouldUseHash) => {

    const snakeCaseName = component.replace(/[A-Z]/g, '-$&').replace(/-/, '').toLowerCase();
    const nonce = ((+(Math.random()*1000).toFixed(3))* 100);
    const hashedName = CryptoJs.MD5(`${CryptoJs.MD5(`${snakeCaseName}${nonce}`)}`);
    const className = shouldUseHash ? `${snakeCaseName}-${hashedName}` : `${snakeCaseName}`;

    const cssClass = `.${className} {\n\n\n}`;
    console.log(`className: ${cssClass}`);

    const stream = fs.createWriteStream(`./${component}/index.scss`);
    stream.once('open', (fd) => {
        stream.write(cssClass);
        stream.end();
    });
};

module.exports = createSCSSFile;