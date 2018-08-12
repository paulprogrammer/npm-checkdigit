#!/usr/bin/env node

const args = process.argv.slice(2);
const barcode_encode = require('./lib/npm-barcode-encode.js');

console.log(barcode_encode.Code128B(args[0]));

