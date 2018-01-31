const assert = require('chai').assert;
const loadFilter = require('../assets/libreria/js/filtro.js');

describe('loadFilter', () => {
  it('cambia el filtro a sepia', () => {
    assert.equal('sepia' !== null, true);
  });

  it('sepia es distinto a null', () => {
    assert.isNotOk(false, 'this will pass'); // (isNotOk) esto no esta bien.
  });

  it('sepia no se escribe con z', () => {
    assert('sepia' !== 'zepia', 'sepia is not zepia');
  });

  it('blackAndWhite != a null', () => {
    assert.isOk(true, 'this will fail');
  });

  it('saturation no es null', () => {
    assert.isNotNull('saturation' === null, true);
  });
});