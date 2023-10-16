function idElemento Audio () {
    document.querySelector(idElemento Audio).play();
}

const listadeTeclas = document.querySelectorAll('.tecla);
let contador = 0
while (contador < 9) {
    listadeTeclas[contador].onclick = TocaSom;
    contador = contador + 1;
}
