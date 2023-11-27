function seletorAudio() {
    const elemento = document.querySelector(seletorAudio);
} if(elemento && elemento.localName === "audio") {
    elemento.play ();
} 
 else{
    console.log ("elementonãoencontrado")
 }

const listadeTeclas = document.querySelectorAll('.tecla');
let contador = 0
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla= listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio =`#som_$(instrumento)`;
    tecla.onclick = function(){
    TocaSom(idAudio)
    }

    contador = contador + 1;
    tecla.onkeydown = function(evento){
        if(evento.code ==='enter' || evento.code==="space")
        tecla.classList.add('ativa')
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
}
}


