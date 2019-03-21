const fs = require('file-system');

const createFunctionComponentTSX = (component) => {
    const react = `import * as React from 'React'\n\n`;
    const propsName = `${component}Props`;
    const css = `import './index.scss\n\n`;
    const props = `interface ${propsName} {}\n\n`;
    const c = `const ${component}: React.SFC\<${propsName}\> = ({props}: ${propsName}) => {\n\t return {\n\n\t}\n};\n`;
    const strs = [react, css, props, c];


    const stream = fs.createWriteStream(`./${component}/index.tsx`);
    stream.once('open', (fd) => {
        strs.forEach(s => {
            stream.write(s);
        });
        stream.end();
    });
}

module.exports = createFunctionComponentTSX;