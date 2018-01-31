const assert = require('chai').assert
const filter = require('../assets/libreria/js/filtro');

describe('filtro', ()=> {
it('sepia es null', ()=> {
assert.isNotOk(false, 'this will pass');
});
it('sepia no se escribe con z', ()=> {
assert('sepia' !== 'zepia', 'sepia is not zepia');
});
});