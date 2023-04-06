/*1.	Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 
while (true){
    let nota = Number(prompt('Digite a nota '))
    if (nota > 0 && nota <= 10){
        console.log(`Nota ${nota} válida`)
        break        
    } else if (nota > 10){
        console.log(`Nota ${nota} inválida`)  
    } else {
        console.log(`Não é número ${nota}`)
    }    
}

let nota = 0
while (true){
    let nota = Number(prompt('Digite a nota '))
    nota > 0 && nota <= 10 ? console.log(`Nota ${nota} válida`) : console.log(`Nota ${nota} inválida`)
        
}*/
/*

2- Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
while(true){
    let nome = prompt('Digite seu nome')
    let senha = prompt('Digite sua senha')
    if (nome != senha){
        console.log('BEM VINDO AO SISTEMA')
    break      
    } else{
        console.log(` Erro! o Nome '${nome}' é igual a senha '${senha}'`)
    }
} */

/*
3- Faça um programa que leia e valide as seguintes informações:
a.	Nome: maior que 3 caracteres;
b.	Idade: entre 0 e 150;
c.	Salário: maior que zero;
d.	Sexo: 'f' ou 'm';
e.	Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

while (true) {
    let nome = prompt('Digite o nome ')
    if (nome.length > 3){
        console.log(`Bem vindo ${nome}`)
    } else{
        console.log(`O seu Nome só tem ${nome.length} letras`)
    }
    let idade = Number(prompt('Digite a sua idade '))
    if (idade > 0 && idade < 150){
        console.log('Idade Aceite')
    } else if (idade > 150){
        console.log('Já estas morto')
    } else{
        console.log('Não digitaste um número')
    }
    let salario = Number(prompt('Digite o seu salario '))
    if(salario > 0){
        console.log(`O seu salario é de ${salario}`)
    } else{
        console.log(`Salario de ${salario} é inválido`)
    }
    let sexo = prompt('Seu genero ').toUpperCase();
    if (sexo == 'M' ){
        console.log(`Voce é Homen`)
    } else if (sexo == 'F'){
        console.log('Você é mulher')
    } else {
        console.log('Genero invalido')
    }
    let estadoCivil = prompt('Seu estado sivil').toUpperCase()
    switch (estadoCivil) {
        case 's':
            console.log(`Você é solteiro`)            
            break;
        case 'c':
            console.log('Você é casado')
            break;
        case 'd':
            console.log('Vce é divorciado')
            break;
        case 'v':
            console.log('Você é viuvo')
        default:
            console.log('Estado civil inexistente')
            break;
    }
    break
}
*/
/*
4-	Faça um programa que leia 5 números e informe a soma e a média dos números. 

let soma = 0
let media = 0
for (let i = 0; i < 5; i++) {
    let numero = Number(prompt('Digite um número '))
    soma += numero 
    media = soma / 5
}
console.log(`A soma dos valores digitados é  ${soma}`)
console.log(`A media dos valores digitados é ${media}`)
*/
/*5	Faça um programa que leia 5 números e informe o maior número.
let maior = 0;
for (let i = 0; i < 5; i++){
    let numero = Number(prompt('Digite um numero'))
    maior += 1
    if (numero > maior){
        maior = numero
    }
}
console.log(`O maior número é o ${maior}`)
*/
/* 6	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
for (let c = 1; c < 50; c+=2){
    console.log(c)
}

for (let c = 49; c > 0; c-=2){
    console.log(c)
}*/
/*7 Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
let numero = Number(prompt('Digite o 1º número'))
let numero1 = Number(prompt('Digite o 2º número'))
for(let i = 0; i < numero1; i++){
    console.log(numero)
}
*/
/*8	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
o	Tabuada de 5:
o	5 X 1 = 5
o	5 X 2 = 10
o	...
o	5 X 10 = 50


let tab = Number(prompt('Digite o número da tabuada'))
if (tab > 0 && tab <= 12) {
    for (let i = 0; i < 13; i+=1){
    console.log(` tabuada dos ${tab} x ${i} = ${i * tab}`)
    }   
} else {
    console.log(`Numero ${tab} invalido`)
}*/

/*Queremos que o usuário insira nomes durante a execução do programa (usaremos o prompt de diálogo), que serão colocados no array um a um. A inserção de nomes terminará quando o botão Cancelar for pressionado. Em seguida, escreveremos todo o conteúdo do array (ou seja, todos os nomes inseridos) no console.

let nomes = [];
let terminar = false
while (!terminar) {
    let nome = prompt('Digite um nome: ')
    if (nome != null) {
        nomes.push(nome)
    } else {
        terminar = true
    }
}
for (let i = 0; i < nomes.length; i++) {
   console.log(nomes[i]);
}*/

/*Escreva um programa que primeiro grave todos esses números no console, depois apenas aqueles que são pares (dica: o resto da divisão de um número par por 2 é igual a 0) e, a seguir, apenas aqueles que são maiores que 10 e menores que 10. 60.


let numeros = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
for (num of numeros) {
    console.log(num)    
}
console.log('depois apenas aqueles que são pares')
for (num of numeros) {
    if (num % 2 == 0) {
        console.log(num)
    } 
}

console.log('apenas aqueles que são maiores que 10 e menores que 10. 60.')
for (num of numeros){
    if (num > 30 && num < 60) {
        console.log(num)
    }
}
//let num = Number(prompt('Insere um valor na matriz '));
let numero = [];
for(num of numero){
    let num = Number(prompt('Insere um valor na matriz '));
    num.push(numero);
    console.log(num)
}
let cont = 0
let numero = [];
for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Insere um valor na matriz '))
    numero.push(num)   
}
console.log(numero)
for ( num of numero) {
    if (num % 2 == 0) {
        console.log(num);
        cont += 1;
    } 
}
for (num of numero) {
    if (num > 10 && num < 60) {
        console.log(num)
    } 
}
console.log(`Você digitou ${cont} números pares`)
let contacto = [
    {
        nome: 'Dionisio Pinto',
        telefone: 932767426,
        email: 'mulando@gmail.com'
    },
    {
        nome: 'Genisio Mulando',
        telefone: 993301724,
        email: 'genisio@gmail.com'
    },
];
/*for(lista of contacto){
    console.log(`${contacto[0].lista}`)

}
console.log(`${contacto[0].email}`)

/*for (let i = 0; i < contacto.length; i++) {
   console.log(contacto[i]);
}*/



/*for (lista of contacto) {
    let item = 'gdfdtry'//prompt('Digite o item do contacto que quer consultar')
    if (lista[item] == lista.nome, lista.telefone, lista.email) {
        console.log(`${lista[item]}`)
    } else {
        console.log(`Comando invalido`);
    }

}

let opcao1 = prompt('Mostrar primeiro contato')
let opcao2 = prompt('Mostrar último contato ')
let opcao3 = prompt('Mostrar todos os contatos ')
*/
let n = 0;
while (n < 100) {
    console.log(n)
    n =+ 10
}


