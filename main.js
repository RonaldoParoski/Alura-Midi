function tocaSom(idElementoAudio) { //funcao com parametro para receber o id do som

    document.querySelector(idElementoAudio).play(); //.play executa audio

}
// document.querySelector('.tecla_pom').onclick = tocaSomPom; PEGA A TECLA E REPRODUZ O SOM NA FUNÇÃO

const listaDeTeclas = document.querySelectorAll('.tecla'); //pega todas as teclas da classe tecla e coloca numa lista

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]; //pega o segundo nome da classe
    //template string
    const idAudio = `#som_${instrumento}` //concatena os valores
  
   tecla.onclick = function () { //funcao anonima sem nome pra nao ser executada direto no browser sem interação como usuario
        tocaSom(idAudio)
    }

    contador = contador + 1;


}