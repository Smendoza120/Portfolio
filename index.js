const d = document;
//Logo
const logo1 = d.querySelector('.logo1');
const logo2 = d.querySelector('.logo2');
logo1.addEventListener('mouseenter', () => {
    logo2.classList.add('logo3');
})

logo1.addEventListener('mouseleave', () => {
    logo2.classList.remove('logo3');
})

//Boton header
const dots = d.querySelector('.dots');
const menu = d.querySelector('.menu');
dots.addEventListener("click", ()=>{
    menu.classList.toggle("menu2")
})

//Animacion cards skills
let card = document.getElementById('card');
let texto1 = document.getElementById('texto1');
let texto2 = document.getElementById('texto2');
let texto3 = document.getElementById('texto3');
let texto4 = document.getElementById('texto4');
let texto5 = document.getElementById('texto5');

card.addEventListener('mouseenter', () => {
    texto1.classList.add('textoEfecto');
});
card.addEventListener('mouseleave', () => {
    texto1.classList.remove('textoEfecto');
});
card.addEventListener('click', () => {
    texto1.classList.toggle('textoEfecto');
});

card2.addEventListener('mouseenter', () => {
    texto2.classList.add('textoEfecto');
});
card2.addEventListener('mouseleave', () => {
    texto2.classList.remove('textoEfecto');
});
card2.addEventListener('click', () => {
    texto2.classList.toggle('textoEfecto');
});

card3.addEventListener('mouseenter', () => {
    texto3.classList.add('textoEfecto');
});
card3.addEventListener('mouseleave', () => {
    texto3.classList.remove('textoEfecto');
});
card3.addEventListener('click', () => {
    texto3.classList.toggle('textoEfecto');
});

card4.addEventListener('mouseenter', () => {
    texto4.classList.add('textoEfecto');
});
card4.addEventListener('mouseleave', () => {
    texto4.classList.remove('textoEfecto');
});
card4.addEventListener('click', () => {
    texto4.classList.toggle('textoEfecto');
});

card5.addEventListener('mouseenter', () => {
    texto5.classList.add('textoEfecto');
});
card5.addEventListener('mouseleave', () => {
    texto5.classList.remove('textoEfecto');
});
card5.addEventListener('click', () => {
    texto5.classList.toggle('textoEfecto');
});

//Formulario
const btnEnviar = d.querySelector('.input__send');
const btnCancelar = d.querySelector('.input__cancel');
const formulario = d.querySelector('.formulario');
const nameMail = d.querySelector('.nombre');
const mail = d.querySelector('.correo');
const textArea = d.querySelector('.mensaje');


btnEnviar.addEventListener('submit', ()=>{
    nameMail.value = '';
    mail.value = '';
    textArea.value = '';
});

btnCancelar.addEventListener('click', ()=>{
    formulario.reset()
})

