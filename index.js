#!/usr/bin/env node
const commander = require('commander');
const fs = require('file-system');
const createComponentFileTSX = require('./creators/createComponentFileTSX');
const createSCSSFile = require('./creators/createSCSSFile');
const createComponentFileJS = require('./creators/createComponentFileJS');


commander.arguments('<component>')
    .option('-t, --tsx', 'make this a tsx file')
    .option('-h, --hash', 'add a hash to the css class name')
    .option('-j, --jsx', 'use the .jsx extension')
    .action((c) => {
    const component = c;
    const useHash = commander.hash;
    const useJSX = commander.jsx;
    const makeTSX = commander.tsx;
    if (!fs.existsSync(component)){
        fs.mkdirSync(c);
        createSCSSFile(component, useHash);
        if (makeTSX) {
            createComponentFileTSX(c);
        } else {
            createComponentFileJS(c, useJSX);
        }
    } else {
        console.warn(`${component} component already exists`);
    }
}).parse(process.argv);


