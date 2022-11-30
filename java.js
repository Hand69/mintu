const menu = document.querySelector(".menu_burger")
const menuBtn  = document.querySelector(".menu_burgerr")
const popap  = document.querySelector(".popap")

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        popap.classList.toggle('active')
    })
}

if (menu && menuBtn) {
    popap.addEventListener('click', () => {
        menu.classList.toggle('active')
        popap.classList.toggle('active')
        menuBtn.classList.toggle('active')
    })
}