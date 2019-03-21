const fs = require('file-system');

const createFunctionComponent = (component, useJSX) => {
  const c = `const ${component} = ({props}) => {\n\t return {\n\n\t}\n};`;
    const fileExtension = useJSX ? 'jsx' : 'js';
    const stream = fs.createWriteStream(`./${component}/index.${fileExtension}`);
    stream.once('open', (fd) => {
        stream.write(c);
        stream.end();
    });
};

module.exports = createFunctionComponent;