//Crie um programa de contagem regressiva. 
//eça um número e conte deste número até 0, 
//usando um loop while no console do navegador.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numeroIn) => {
  let contador = parseInt(numeroIn);

  while (contador > 0) {
    contador--;
    console.log('Contador ' + contador);
  }

  rl.close();
});


/*let numeroIn = prompt("Digite um número..");
let contador = numeroIn;

while(contador > 0){
    contador--;
    console.log("Contador " + contador);
}
/*
O erro ReferenceError: prompt is not defined ocorre porque o prompt não é uma função definida no ambiente Node.js,
 onde o código JavaScript é normalmente executado fora de um navegador. O prompt é uma função específica do 
 navegador para coletar entrada do usuário.
Para rodar um código que recebe input do usuário em Node.js, você pode usar o módulo readline para ler dados 
do terminal. Aqui está como você pode ajustar seu código para funcionar no ambiente Node.js:*/