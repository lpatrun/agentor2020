export {};

const lista = document.querySelector(".hide-navi") as HTMLElement;

lista.addEventListener('click', e => {
    $('#navi-toggle').prop('checked', false);     
});
