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

//Animacion barras de carga

const html = d.querySelector('.barra-html-2');
const css = d.querySelector('.barra-css-2');
const java = d.querySelector('.barra-java-2');
const js = d.querySelector('.barra-javascript-2');
const git = d.querySelector('.barra-git-2');

const cargarBarra = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            html.classList.add('carga-html');
            css.classList.add('carga-css');
            java.classList.add('carga-java');
            js.classList.add('carga-js');
            git.classList.add('carga-git');
        } else {
            html.classList.remove('carga-html');
            css.classList.remove('carga-css');
            java.classList.remove('carga-java');
            js.classList.remove('carga-js');
            git.classList.remove('carga-git');
        }
    });
}

const observador = new IntersectionObserver(cargarBarra, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(html);
observador.observe(css);
observador.observe(java);
observador.observe(js);
observador.observe(git);

//Formulario
const btnCancelar = d.querySelector('.cancelar');
const btnEnviar = d.querySelector('.enviar');
const formulario = d.querySelector('.formulario');

btnCancelar.addEventListener('click', ()=>{
    formulario.reset();
});

btnEnviar.addEventListener('click', ()=>{
    formulario.reset();
});