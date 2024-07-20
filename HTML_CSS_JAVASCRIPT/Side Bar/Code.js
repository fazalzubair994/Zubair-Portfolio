let menubtn = document.querySelector('#menuButton');
let closebtn = document.querySelector('#closeMenuButton');
let menu = document.querySelector('.sidebar');
menubtn.addEventListener('click', () => {
    menu.classList.toggle("show-sidebar");
})

closebtn.addEventListener('click', () => {
    menu.classList.toggle("show-sidebar");
})