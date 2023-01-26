function tocaSom(seletorAudio) { //funcao com parametro para receber o id do som

    const elemento = document.querySelector(seletorAudio) //.play executa audio

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        alert('Elemento não encontrado')
    }
}
// document.querySelector('.tecla_pom').onclick = tocaSomPom; PEGA A TECLA E REPRODUZ O SOM NA FUNÇÃO

const listaDeTeclas = document.querySelectorAll('.tecla'); //pega todas as teclas da classe tecla e coloca numa lista

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]; //pega o segundo nome da classe
    //template string
    const idAudio = `#som_${instrumento}` //concatena os valores

    tecla.onclick = function () { //funcao anonima sem nome pra nao ser executada direto no browser sem interação como usuario
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') { //pega a tecla que foi digitada
            tecla.classList.add('ativa')

        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}