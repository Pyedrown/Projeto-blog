/*Painel das cores codigo*/
var corAzul = window.document.getElementById('cor-azul')
var corVermelha = window.document.getElementById('cor-vermelho')
var corAmarelo = window.document.getElementById('cor-amarelo')
var corVerde = window.document.getElementById('cor-verde')
var corpo = window.document.body
var painel = window.document.getElementById('painel')
var painelCores = window.document.getElementById('painel-cores')
corAzul.addEventListener('click', clicarCorAzul)
function clicarCorAzul() {
    corpo.style.background = '#333863'
    painel.style.background = '#40467c'
    painelCores.style.background = '#393f6e'
}
corVermelha.addEventListener('click', clicarCorVermelha)
function clicarCorVermelha() {
    corpo.style.background = '#573131'
    painel.style.background = '#794040'
    painelCores.style.background = '#6d3838'
}
corAmarelo.addEventListener('click', clicarCorAmarelo)
function clicarCorAmarelo() {
    corpo.style.background = '#8a8946'
    painel.style.background = '#afae55'
    painelCores.style.background = '#9b9a4e'
}
corVerde.addEventListener('click', clicarCorVerde)
function clicarCorVerde() {
    corpo.style.background = '#3b793b'
    painel.style.background = '#4e9e4e'
    painelCores.style.background = '#448b44'
}