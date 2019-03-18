const fs = require('file-system');
const createHash = require('./createHash');

const createSCSSFile = (component) => {
    console.log(`generating component for ${component}`);
    const randomN = ((+(Math.random()*1000).toFixed(3))* 100);
    console.log(`randomN: ${component}${randomN}`);
    const hashedName = createHash(`${createHash(`${component}${randomN}`)}`);
    console.log(`hashedName: ${hashedName}`);
    const cssClass = `.${component}-${hashedName} {\n\n\n}`;
    console.log(`className: ${component}-${hashedName}`);

    const stream = fs.createWriteStream(`./${component}/index.scss`);
    stream.once('open', (fd) => {
        stream.write(cssClass);
        stream.end();
    });
};

module.exports = createSCSSFile;