const icon = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');
const body = document.querySelector('body');
const trabajos = document.querySelectorAll('.trabajo')
const plusIcon = document.querySelectorAll('.plus-icon')
const resumenes = document.querySelectorAll('.resumen-container')
const plus = document.querySelectorAll('.fa-plus')
const frasesHeader = document.querySelector('#frases-header')


const revealMenu = () => {
    if (menu.className == 'show') {
        menu.className = ''
    } else {
        menu.className = 'show'
    }
}



trabajos.forEach((trabajo, index) => {
    trabajo.addEventListener('click', () => {
        const signo = plus[index]
        const resumen = resumenes[index]; // Relacionar trabajo con su resumen correspondiente
        if (resumen.className != 'resumen-show' || signo.className != 'fa-solid fa-minus') {
            resumen.className = 'resumen-show';
            signo.className = 'fa-solid fa-minus';
        } else {
            resumen.className = 'resumen-container';
            signo.className = 'fa-solid fa-plus';
        }
    });
});

icon.addEventListener('click', revealMenu)

const frases = [
    '– Epicteto: El obstáculo es el camino. – Marco Aurelio. Los desafíos no son impedimentos, sino oportunidades para crecer y mejorar.',
    '– Epicteto: "No puedes controlar lo que te sucede, pero puedes controlar tu respuesta.". El poder reside en cómo reaccionamos ante los eventos, no en los eventos mismos.',
    '– Séneca: "La riqueza no consiste en tener grandes posesiones, sino en tener pocas necesidades." . La verdadera abundancia se encuentra en la autosuficiencia y en vivir con lo esencial.',
    '– Marco Aurelio: "Si es soportable, entonces soporta. De lo contrario, corta la cuerda." . Acepta lo que puedes manejar y deja ir lo que no está en tu control.',
    '– Epicteto: "Primero di a ti mismo qué serás, y luego haz lo que debas hacer." . Define tu propósito y tus acciones seguirán alineadas con esa visión.'
];

const frasesGenarator = () => {
    let idx = Math.floor(Math.random() * 5)
    frasesHeader.innerHTML = frases[idx]
    console.log(idx);
    
    
}
setInterval(frasesGenarator, 3000)


