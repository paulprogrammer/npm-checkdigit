#!/usr/bin/env node

const test = require('tape');
const barcode_encode = require('../lib/npm-barcode-encode.js');

test('code 128b test', function(t) {
	t.ok(barcode_encode.Code128B('test')=='ÌtestwÎ','encode correct');
	t.end();
});