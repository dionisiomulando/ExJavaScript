/*let numero = prompt('Digite um número')
if (numero > 90 && numero < 110){
    console.log('Bingo')
} else{
    console.log('Voçê falhou')
}
let numero = prompt('Digite um número')
numero > 90 && numero < 110? console.log('Bingo'):console.log('Você Falhou')

let number = prompt("Digite um número: ");
let messagem = (number > 90 && number < 110) ? "Bingo!": "Você Falhou";
alert(messagem);

let numero = Number(prompt('Digite o primeiro número'))
let sinal = prompt('Digite um dos sinais: +, -, /, *')
let Numero = Number(prompt('Digite o segundo número'))
if (sinal== '+'){
    console.log(numero + Numero)
} else if(sinal == '-'){
    console.log(numero - Numero)
} else if(sinal == '/'){
    console.log(numero / Numero)
} else if(sinal == '*'){
    console.log(numero * Numero)
}else{
    console.log('Ocorreu Um ERRO!')
}

let firstNumber = Number(prompt("Introduce o primeiro número: "));
let secondNumber = Number(prompt("Introduce o segundo número: "));
let operand = prompt("Introduce o operando (+, -, * o /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: operando desconhecido";
    }
} else {
    result = "Error: al menos uno de los valores ingresados no es un número";
}
alert(result);*/
/*
Vamos um passo além: tente modificar o programa para que o usuário possa escolher o que deseja fazer com a lista. As opções serão:
Mostrar primeiro contato (primeiro)
Mostrar último contato (último)
Adicionar um novo contato (novo)



let contacto = [
    {
        Nome: 'Dionisio Pinto',
        Telefone: 932767426,
        email: 'mulando1993@gmail.com'
    },
    {
        Nome: 'Genisio Mulando',
        Telefone: 993301724,
        email: 'genisio@gmail.com'
    },
    {

    }
]
let opcoes = Number(prompt('Digite 1 para 1º Contac, 2 para último Contac e 3 para Novo Contac'));
let ultimo = contacto-1
if (opcoes == 1){
    console.log(contacto[0])
} else if(opcoes == 2){
    console.log(contacto[ultimo])
}/*else if(opcoes == 3){
    contacto[1].Nome = prompt('Digite um  nome')
    contacto[1].Telefone = Number(prompt('Digite o seu numero'))
    contacto[1].email = prompt('Digite o seu email')
}*/
//console.log(contacto)
//console.log(contacto[ultimo])

//Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.
/*let letra = prompt('Digite uma letra')
if (letra == 'a'|| letra == 'e'|| letra == 'i'|| letra == 'o'|| letra == 'u'){
    alert(`A letra ${letra} é uma vogal`)
} else{
    alert(`A letra ${letra} é uma Consoante`)
}*/

/*Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.

let nota1 = Number(prompt('Introduza a 1º nota '))
let nota2 = Number(prompt('Introduza a 2º nota'))
let media = (nota1 + nota2) / 2
if (media >= 7 && media < 10){
    console.log(`A sua media é ${media} "APROVADO"`)
}else if(media < 7){
    console.log(`A sua media é ${media} "REPROVADO"`)
}else if (media == 10){
    console.log(`A sua media é ${media} "APROVADO COM DISTINÇÃO"`)
}else{
    console.log('Valores não reconhecido')
}*/
//Faça um script que leia três números inteiros e mostre o maior deles.
/*let numero1 = Number(prompt('Digite o 1º número'))
let numero2 = Number(prompt('Digite o 2º número'))
let numero3 = Number(prompt('Digite o 3º número'))
if (numero1>numero2 && numero1>numero3){
    console.log(`O  1º número ${numero1} é MAIOR em relação ao número ${numero2} e ${numero3}`)
} else if (numero2>numero1 && numero2>numero3){
    console.log(`O 2º número ${numero2} é MAIOR em relação ao número ${numero1} e ${numero3}`)
} else{
    console.log(`O 3º número ${numero3} é MAIOR em relação ao número ${numero2} e ${numero1}`)
}*/
/*
Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

    Dicas:
    Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
    Triângulo Equilátero: três lados iguais;
    Triângulo Isósceles: quaisquer dois lados iguais;
    Triângulo Escaleno: três lados diferentes;

let lado1 = Number(prompt('Diga um lado do triangulo'))
let lado2 = Number(prompt('Diga outro lado do triangulo'))
let lado3 = Number(prompt('Diga e outro lado do triangulo'))
if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2) {
    if (lado1 == lado2 && lado1 == lado3) {
        console.log(`Todos lados iguais: ${lado1}, ${lado2}, ${lado3} => Triângulo Equilátero`)
    } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log(`3 Lados diferentes: ${lado1}, ${lado2}, ${lado3} => Triângulo Escaleno`)
    } else{
        console.log(`Quaisquer lados iguais: ${lado1}, ${lado2}, ${lado3} => Triângulo Isósceles`)
    }
} else {
    console.log('Não é um triângulo')
}*/
/*24. O Hipermercado Kero está com uma promoção de carnes que é imperdível. Confira:
                    Até 5 Kg               Acima de 5 Kg
    File Duplo      kz 4,90 por Kg          kz 5,80 por Kg
    Alcatra         kz 5,90 por Kg          kz 6,80 por Kg
    Picanha         kz 6,90 por Kg          kz 7,80 por Kg
    Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão kero o cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar. 

let pagamento = String(prompt('Tipo de pagamento: Cartão ou Dinheiro'))
let tipoCarne = String(prompt('Tipo de carne'));
let quantidade = Number(prompt('Digite a quantidade por KG'));
let desconto = 0
let valorPagar = 0
let preco = 0;
if (pagamento == 'Cartão') {   
    if (tipoCarne == 'File Duplo') {
        preco = (4.90 * quantidade).toFixed(2);
        desconto = (preco * 0.05).toFixed(2);
        valorPagar = (preco - desconto).toFixed(2);
        if (quantidade  > 5) {
            preco = (3.90 * quantidade).toFixed(2);
            desconto = (preco * 0.5).toFixed(2);
            valorPagar = (preco - desconto).toFixed(2)
        }
    console.log(`Recibo: Tipo de Carde: ${tipoCarne}, Quantidade: ${quantidade}, Preço: ${preco}, Pagou com: ${pagamento}, Desconto: ${desconto}, Total a Pagar: ${valorPagar}`) 
    } else if (tipoCarne == 'Alcatra') {
        preco = (5.90 * quantidade).toFixed(2);
        desconto = (preco * 0.05).toFixed(2);
        valorPagar = (preco - desconto).toFixed(2);
        if (quantidade  > 5) {
            preco = (4.90 * quantidade).toFixed(2);
            desconto = (preco * 0.5).toFixed(2);
            valorPagar = (preco - desconto).toFixed(2)
        }
    console.log(`Recibo: Tipo de Carde: ${tipoCarne}, Quantidade: ${quantidade}, Preço: ${preco}, Pagou com: ${pagamento}, Desconto: ${desconto}, Total a Pagar: ${valorPagar}`)
    } else {
        console.log('Esté produto não está em PROMOÇÃO')
    }
} else if ( pagamento == 'Dinheiro'){
    if (tipoCarne == 'File Duplo') {
        preco = (4.90 * quantidade).toFixed(2);
        valorPagar = preco;
        if (quantidade  > 5) {
            preco = (3.90 * quantidade).toFixed(2);
            desconto = (preco * 0.05).toFixed(2);
            valorPagar = (preco - desconto).toFixed(2)
        }
    console.log(`Recibo: Tipo de Carde: ${tipoCarne}, Quantidade: ${quantidade}, Preço: ${preco}, Pagou com: ${pagamento}, Desconto: ${desconto}, Total a Pagar: ${valorPagar}`)
    } else if (tipoCarne == 'Alcatra') {
        preco = (5.90 * quantidade).toFixed(2);
        valorPagar = preco
        if (quantidade  > 5) {
            preco = (4.90 * quantidade).toFixed(2);
            desconto = (preco * 0.5).toFixed(2);
            valorPagar = (preco - desconto).toFixed(2)
        }
    console.log(`Recibo: Tipo de Carde: ${tipoCarne}, Quantidade: ${quantidade}, Preço: ${preco}, Pagou com: ${pagamento}, Desconto: ${desconto}, Total a Pagar: ${valorPagar}`) 
    } else {
        console.log('Esté produto não está em PROMOÇÃO')
    }
} else {
    console.log('Esté produto não está em PROMOÇÃO')
}

let ano = String(prompt('Quer analisar que ano'))
if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)) {
    console.log(`O ano ${ano} é Bissesto`)
} else {
    console.log(`O ano ${ano} é Comum`)
}*/
/*18. Faça um script para um caixa eletrônico. O script deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O script não deve se preocupar com a quantidade de notas existentes na máquina.
1.	 Exemplo: Para sacar a quantia de 256 reais, o script fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
2.	 Exemplo: Para sacar a quantia de 399 reais, o script fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

