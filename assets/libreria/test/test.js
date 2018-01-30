const chai = require('chai');

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
    
    it('leer el id', () => {
      expect.typeOf(document.getElementById('saturation'), true);
    })

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