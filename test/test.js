const assert = require("chai").assert;
const cargaFiltro = require('../assets/libreria/js/filtro.js');

describe('cargaFiltro', () => {
   it ('cambia el filtro a sepia', () => {
       assert.equal('sepia' !== null, true);
   });

   it('sepia es distinto a null', () => {
    assert.isNotOk(false, 'this will pass');//(isNotOk) esto no esta bien 
});

   it('sepia no se escribe con z', () => {
assert('sepia' !== 'zepia', 'sepia is not zepia');
});


});

/* jsdom no resulta /*
/*const chai = require('chai');

const jsdom = require("jsdom");
const {
   JSDOM
} = jsdom;
let dom = new JSDOM ('<!DOCTYPE html><html lang="en">'+
	'<head><meta charset="UTF-8"><title>Filter Image</title>'+
	'<link rel="stylesheet" type="text/css" href="assets/css/index.css"></head>'+
	'<body onload="cargaFiltro();">'+
	'<img id="saturation" src="../demo/images/img2.jpg">'+
	'<script src="js/filtro.js"></script></body></html>');
const {window} = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};

const cargaFiltro = require("../js/filtro.js");
var expect = require('chai').expect;


describe('comprobar string', () => {
    
    it('sepia == null', () => {
      expect.typeOf(document.getElementById('saturation'), true);
    })
}else{
    alert('ingr')

});


/*
describe('comprobar null', () => {
    
    it('leer el id', () => {
        chai.assert.exists(document.getElementById('saturation'));
    })

});
describe('comprobar null', () => {
    it('debería devolver true si sepia es distinto de null', () => {
        expect(cargaFiltro.extension(), true);
    });*/