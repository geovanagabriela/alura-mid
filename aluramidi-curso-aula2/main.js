function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listadeTeclas = document.querySelectorAll('.tecla);
let contador = 0
while (contador < 9) {
    listadeTeclas[contador].onclick = TocaSomPom;
    contador = contador + 1;
}
