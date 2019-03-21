const fs = require('file-system');

const createComponentFileJS = (component, useJSX) => {
  const c = `class ${component} extends React.Component {\n\trender(){\n\n\n\t}\n\}`;
  const fileExtension = useJSX ? 'jsx' : 'js';
    const stream = fs.createWriteStream(`./${component}/index.${fileExtension}`);
    stream.once('open', (fd) => {
        stream.write(c);
        stream.end();
    });
};

module.exports = createComponentFileJS;