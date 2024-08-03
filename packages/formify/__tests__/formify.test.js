'use strict';

const formify = require('..');
const assert = require('assert').strict;

assert.strictEqual(formify(), 'Hello from formify');
console.info('formify tests passed');
