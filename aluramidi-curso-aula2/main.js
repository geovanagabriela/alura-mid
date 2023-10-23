function idElemento Audio () {
    document.querySelector(idElemento Audio).play();
}

const listadeTeclas = document.querySelectorAll('.tecla);
let contador = 0
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla= listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const id Audio =`#som_$(instrumento)`;
    tecla.onclick = function(){
    TocaSom(id Audio)
}
    contador = contador + 1;
}
