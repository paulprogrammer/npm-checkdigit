#!/usr/bin/env node

const test = require('tape');
const barcode_encode = require('../lib/npm-barcode-encode.js');

test('code 128a test', function(t) {
	t.ok(barcode_encode.Code128A('test')=='ËtestvÎ','encode correct');
	t.end();
});