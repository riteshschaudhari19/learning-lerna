'use strict';

const prospect = require('..');
const assert = require('assert').strict;

assert.strictEqual(prospect(), 'Hello from prospect');
console.info('prospect tests passed');
