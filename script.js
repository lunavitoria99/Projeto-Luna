function toggleMode() {
const html = document.Element
html.classList.toggleMode('light')
//if(body.classList.contains('light')){
//html.classList.remove('light')
//} else {
//html.classList.add('light')
//}
//pegar a tag img
const img = document.querySelector("#profile img")
//substituir a imagem
if(html.classList.contains('light')) {
//se tiver light mode, adicionar a imagem light
img.setAttribute('src', "./assets/avatar-light.png")  
} else {
//se tiver sem light mode, amter a imgam normal
img.setAttribute('src',"./assets/avatar.png")  
}
}