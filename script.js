const box = document.getElementById('box')
const body = document.querySelector('body')
const header = document.querySelector('header')
const home = document.getElementById('home')
const sobreMim = document.getElementById ('sobreMim')
const projetos = document.getElementById ('projetos')
box.onclick = function(){
    box.classList.toggle('active')
    body.classList.toggle('active')
    header.classList.toggle('active')
    home.classList.toggle('active')
    sobreMim.classList.toggle('active')
    projetos.classList.toggle('active')
}

// --------------- //

const Bmobile = document.getElementById('Bmobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

Bmobile.addEventListener('click', toggleMenu);