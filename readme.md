<p align="center">
  <img src="assets/demo/images/logo.png"/>
</p>

![image](https://user-images.githubusercontent.com/30607043/37958663-729d61dc-3187-11e8-916c-477ba59e9d28.png)

![npm](https://img.shields.io/npm/v/npm.svg)
![chai](https://img.shields.io/badge/chai-4.1.2-orange.svg)
![mocha](https://img.shields.io/badge/mocha-5.0.0-green.svg)
![javascript](https://img.shields.io/badge/javascript-es6-ff69b4.svg)
![node](https://img.shields.io/badge/nodejs-v8.9.4-red.svg)
![node](https://img.shields.io/badge/contributors-3-brightgreen.svg)

## Descripción

**Image Filter** es una pequeña librería para manipular imágenes y te permite aplicar algunos filtros básicos como: 
- Sepia 
- Grayscale
- Saturation

## Instalación

- Usuario debe iniciar su proyecto con el siguiente comando:
```
npm init
```
con esto creamos nuestro package.json

- Para instalar carpeta imgfiltertest ejecuta el siguiente comando:
```
npm install imgfiltertest --save
```
con esto podemos ver demos y carpetas

- Para agregar la librería a tu proyecto debemos enlazar el archivo filtro.js a tu HTML con el siguiente script
```
<script src="node_modules/imgfiltertest/assets/libreria/js/filtro.js"></script>
```

## ¿Cómo se usa?
### Ejemplo

Para poder aplicar filtros a tus imagenes debes de colocar en tu html:
```
<!-- Llama a la función para cargar filtro -->
<body onload="loadFilter();">

<!-- Imagen para aplicar filtros -->
<img id="sepia" src="./tuImagen.png"/>
```

## Demo
![Demo](assets/demo/images/gif-imgFilter.gif)

## Colaboradoras

:wink: [Katherine Dangelo](https://github.com/Kdangelo),
:relaxed: [Katherine Ramirez](https://github.com/katherineRamirez),
:smile: [Carolina Saavedra](https://github.com/saahub)
