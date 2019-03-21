#!/usr/bin/env node
const commander = require('commander');
const fs = require('file-system');
const createComponentFileTSX = require('./creators/createComponentFileTSX');
const createSCSSFile = require('./creators/createSCSSFile');


commander.arguments('<component>')
    .option('-t, --tsx', 'make this a tsx file')
    .option('-h, --hash', 'add a hash to the css class name')
    .action((c) => {
    const component = c;
    const useHash = commander.hash;
    if (!fs.existsSync(component)){
        fs.mkdirSync(c);
        createSCSSFile(component, useHash);
        if (commander.tsx) {
            createComponentFileTSX(c);
        }
    } else {
        createSCSSFile(component, useHash);
        if (commander.tsx) {
            createComponentFileTSX(c);
        }
    }
}).parse(process.argv);


