'use strict';

const validify = require('..');
const assert = require('assert').strict;

assert.strictEqual(validify(), 'Hello from validify');
console.info('validify tests passed');
