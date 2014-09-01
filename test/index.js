/**
 * Module Dependencies
 */

var browser = require('is-browser');
var assert = require('assert');

try {
  var support = require('generator-support');
} catch(e) {
  var support = require('..');
}

/**
 * Node version
 */

try {
  var node = process.versions.node;
} catch(e) {
  var node = null;
}

/**
 * Tests
 */

describe('generator-support', function() {
  it('should work in node 0.11.x', function() {
    if (!/^0\.11/.test(node)) return;
    assert(support);
  })

  it('should not work in node 0.10.x', function() {
    if (!/^0\.10/.test(node)) return;
    assert(!support);
  })

  it('should not work in the browser (for now)', function() {
    if (!browser) return;
    assert(!support);
  })
})
