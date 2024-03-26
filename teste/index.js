//Declarando variável e laço de repetição
let XP = 0;
while (XP <= 2) {
  XP = Math.floor(Math.random() * 10002) + 1;
  console.log( XP );
}

//Declarando variável, operadores e estrutura de decisão

let resultado = XP
let heroi = "Mulher Maravilha"
let nivel = ""

if (resultado <= 1000) { nivel = "Ferro" }
else if (resultado <= 2000) { nivel= "Bronze"}
else if (resultado <= 5000) { nivel= "Prata"}
else if (resultado <= 7000) { nivel= "Ouro"}
else if (resultado <= 8000) { nivel= "Platina"}
else if (resultado <= 9000) { nivel= "Ascendente"}
else if (resultado <= 10000) { nivel= "Imortal"}
else if (resultado >= 10000) { nivel= "Radiante"}

//Saída

console.log("O herói de nome " + heroi + " está no nível de " + nivel)