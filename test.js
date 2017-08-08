const assert = require('assert'),
      sort = require('./index.js');

describe('Version sort', function(){
  it (`Should return ['graph2', 'graph10']`, function(){
    assert.deepEqual(['graph2', 'graph10'],
                     ['graph10', 'graph2'].sort(sort))
  })
  it (`Should return ['4.1.2.1233', '4.1.3.0033']`, function(){
    assert.deepEqual(['4.1.2.1233', '4.1.3.0033'],
                     ['4.1.3.0033', '4.1.2.1233'].sort(sort))
  })
})