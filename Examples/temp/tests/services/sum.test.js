const assert = require('assert');
const { sum } = require('../../application/services/sum');

test('test', () => {
    assert.equal(sum(2, 2), 4);
});
