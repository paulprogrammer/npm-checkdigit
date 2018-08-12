#!/usr/bin/env node

const symbols = [... " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÃÄÅÆÇÈÉÊËÌÍÎ"];
const osym = [... "Â!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÃÄÅÆÇÈÉÊËÌÍÎ"];
const start = symbols[103];
const end = symbols[106];

module.exports = {
	Code128A: function(input_str) {
		var input = input_str.split('');
		var output = [start];
		var sum = symbols.indexOf(start);

		for (var i = 0; i < input.length; i++) {
		  var char = input[i];
		  var num = symbols.indexOf(char);
		  if (num < 0) {
		    throw new Error("Unsupported character " + char);
		  }
		  sum += (num*(i+1));
		  output.push(osym[num]);
		}
		output.push(osym[sum%103]);
		output.push(end);
		return output.join('');
	}
};