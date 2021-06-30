var id = null;
var hori = 0;
var vert = 0;


//Pausa os movimentos
function stop(){ 
  clearInterval(id);
}


// Controle dos movimentos
function myMove() { 
  var evento = event.keyCode
  var elem = document.getElementById("animate");   


  // Exibi o código da tecla que foi precionada
  document.getElementById("code").innerHTML = "KEY CODE correspondente: " + evento


  // Controle Vestical
  if (evento == 37 || evento == 39) {
    clearInterval(id);
    id = setInterval(movimentoVestical, 100);
   
    //Controle dos movimentos Vesticais   
    function movimentoVestical() {

      if (evento == 37) {// Esquerda
        if (vert < 0){
          vert = 400
        } else {
          vert-= 20;
          elem.style.left = vert + "px";
        }
      }

      if (evento == 39) { // Direita
        if (vert == 380) {
          vert = 0;
        } else {
          vert+= 20;
          elem.style.left = vert + "px";
        }
      }

      //Exibi as posições Vesticais
      document.getElementById("vestical").innerHTML = "Posição Vestical: " + vert

    } // Fim da função movimentoVestical

  } // Fim do if Vestical


  // Controle Horizontal
  if (evento == 38 || evento == 40) {
    clearInterval(id);
    id = setInterval(movimentoHorizontal, 100);


    //Controle dos movimentos Horizontais
    function movimentoHorizontal() {

      if (evento == 38) { // Cima
        if (hori == 0) {
          hori = 400
        } else{
          hori-= 20;
          elem.style.top = hori + "px";
        }
      }

      if (evento == 40) { // Baixo
        if (hori == 380) {
          hori = 0;
        } else{
          hori+= 20;
          elem.style.top = hori + "px";
        }
      }

      //Exibi as posições Horizontais
      document.getElementById("horizontal").innerHTML = "Posição Horizontal: " + hori

    }// Fim da função movimentoHorizontal

  }// Fim do if Horizontal

  

} // Fim da Função Controle dos Movimentos



function pontoRandom() {

  var posicaoX = Math.floor(Math.random() * 20) * 20
  var posicaoY = Math.floor(Math.random() * 20) * 20

  console.log(posicaoX, posicaoY)

  document.getElementById("ponto").style.left = posicaoX + 'px'
  document.getElementById("ponto").style.top = posicaoY + 'px'

}