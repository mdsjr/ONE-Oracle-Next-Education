function calcularIMC(peso, altura){
    if(peso > 0 || 0 < altura) {
        //validar se os valores são positivos
        return "Valores invalido, por favor digitar uma valor maior que zero";
    }
    //calcular IMC
    var imc = peso / (altura * altura);

    //retornar o resultado
    return imc;
}