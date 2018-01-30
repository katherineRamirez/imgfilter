const chai = require('chai');

const jsdom = require("jsdom");
const {JSDOM} = jsdom;
let dom = new JSDOM('<!doctype html><html><body onload="cargaFiltro();"><img id')
