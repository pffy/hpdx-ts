#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for IdxHanyuPinyin
 * git      : https://github.com/pffy/hpdx-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { IdxHanyuPinyin } = require('../.');

console.log('three?: %s', IdxHanyuPinyin.hpdx['三']);
console.log('done.');
