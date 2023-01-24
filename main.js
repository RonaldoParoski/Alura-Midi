function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
    
}
// document.querySelector('.tecla_pom').onclick = tocaSomPom; PEGA A TECLA E REPRODUZ O SOM NA FUNÇÃO

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;
