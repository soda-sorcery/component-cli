#!/usr/bin/env node
const commander = require('commander');
const fs = require('file-system');
const createComponentFileTSX = require('./creators/createComponentFileTSX');
const createSCSSFile = require('./creators/createSCSSFile');


commander.arguments('<component>')
    .option('-t, --tsx', 'make this a tsx file')
    .action((c) => {
    const component = c.toLowerCase();
    if (!fs.existsSync(component)){
        fs.mkdirSync(c);
        createSCSSFile(component);
        if (commander.tsx) {
            createComponentFileTSX(c);
        }
    } else {
        createSCSSFile(component);
        if (commander.tsx) {
            createComponentFileTSX(c);
        }
    }
}).parse(process.argv);


