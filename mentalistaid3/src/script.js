var segredo = parseInt(Math.random() * 11);
var campoResultado = document.getElementById("resultado");
const tentativasMax = 5;
var tentativas = 0;
var valorBotao

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
    if (chute == segredo) {
    campoResultado.innerHTML = "Acertô mizera, era " + segredo + ". Segredo resetado";
    segredo = parseInt(Math.random() * 11);
    console.log(segredo)
    tentativas = 0;
  } else if (chute > 10 || chute < 0) {
    campoResultado.innerHTML = "Só vale número entre 0 e 10, mula";
    console.log(tentativas)
  } else if (chute == 0 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Tenta mais uma vez, vai";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 1 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Ainda não acertou";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 2 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Outra vez";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 3 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Vai acertar nunca, não?";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 4 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Quer que eu explique o jogo?";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 5 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Não foi dessa vez";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 6 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Aeeeeeee, errou de novo!";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 7 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Eu confio";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 8 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Bip-bop-resposta-e-rrada";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 9 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Só precisa acertar uma vez, cara";
    tentativas++;
    console.log(tentativas)
  } else if (chute == 10 && chute != segredo && (tentativas <= 5)) {
    campoResultado.innerHTML = "Nope!";
    tentativas++;
    console.log(tentativas)
  } else if (tentativas > tentativasMax) {
    campoResultado.innerHTML = "Chega mano, tu é muito azarado. Resetei o segredo. A resposta era " + segredo;
    console.log(tentativas)
    segredo = parseInt(Math.random() * 11);
    tentativas = 0
  } else if (chute == 9 && chute != segredo) {
    campoResultado.innerHTML = "Só precisa acertar uma vez, cara";
    tentativas++;
    console.log(tentativas)
  } else {
    campoResultado.innerHTML = "Quebrou o programa"
  }
   
}
