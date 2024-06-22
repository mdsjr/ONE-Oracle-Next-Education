alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute; 
let tentativa = 0;

//enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto){


    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} ${tentativa} tentativas`);
    } else {
        if (numeroSecreto > chute){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }

        //tentativa = tentativa + 1;
        tentativa++;
    
    }

}

