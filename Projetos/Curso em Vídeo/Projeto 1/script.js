//pegando uma variável global
var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)
var varGlobal = rootStyles.getPropertyValue('--cor1')
console.log(varGlobal)

//pegar um variável local
var local = document.getElementById('pag_header')
var localStyles = getComputedStyle(root)
var localVar = localStyles.getPropertyValue('--verde')
console.log(localStyles)