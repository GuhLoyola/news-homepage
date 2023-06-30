const nav = document.querySelector('.nav-bar')

nav.onclick = function() {
    const menu = document.querySelector('.nav-links')
    const icon = document.querySelector('.menu')
    const back = document.querySelector('.back')

    menu.classList.toggle('ativo')
    icon.classList.toggle('active')
    back.classList.toggle('ligado')
}