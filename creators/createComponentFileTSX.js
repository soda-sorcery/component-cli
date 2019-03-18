const fs = require('file-system');

function createComponentFileTSX(component) {
    const react = `import * as React from 'React'\n\n`;
    const css = `import './index.scss\n\n`;
    const props = `interface ${component}Props {}\n`;
    const state = `interface ${component}State {}\n\n\n`;
    const c = `class ${component} extends React.Component\<${component}Props, ${component}State\> {\n\n\tpublic render() {\n\n\t}\n}\n`;
    const strs = [react, css, props, state, c];


    const stream = fs.createWriteStream(`./${component}/index.tsx`);
    stream.once('open', (fd) => {
        strs.forEach(s => {
            stream.write(s);
        });
        stream.end();
    });
}

module.exports = createComponentFileTSX;