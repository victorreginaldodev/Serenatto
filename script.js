const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'ligth';
    elemento.setAttribute('data-bs-theme', modo)
})