/*
console.log('Bem vindo ao JavaScript')
let nota1;
nota1 = 10;
const nota2 = 15;
console.log(`A 1º nota é ${nota1} e a 2º nota é ${nota2} a media é `, (nota1 + nota2) / 2)*/
/*
let nome = 'Dionísio Mulando';
{
    let nome1 = '';
    nome1 = 'Pinto';
    {
        const anos = 29;
        {
            const ano = 29;
            console.log(ano);
        }
        console.log(anos);
    }
    console.log(nome1)
}
console.log(nome);

let nome = 'Dionisio';
console.log (nome + 2)
//console.log (Number(nome) + 2)
console.log(typeof Number(nome))
*/
/*
let pais = {
    nome: 'Angola',
    populacao: 30745960,
    presidente: 'João Lourenço',
    capital: 'Luanda'
}

console.log(pais.presidente)
pais.populacao = 29480125
console.log(pais.populacao)
delete pais.populacao
console.log(pais.populacao)
console.log(pais)
pais.populacao = 28000000
console.log(pais)

let nome = ['Dionisio','Pinto','Mulando',['Juliana','Nanikutonda']]
//console.log(typeof nome)
//console.log(nome[3][1])
//nome[3][3]= 932767426
//console.log(nome)
console.log(nome[3].indexOf('Nanikutonda'))
nome.unshift

let usuario = [
    {
        nome: 'Dionisio Mulando',
        idade: 29,
        email: 'mulando1993@gmail.com',
        sexo: 'H'
    },
    {
        nome: 'Juliana Pinto',
        idade: 11,
        email: 'juliana.pinto@gmail.com',
        sexo: 'F'
    }
]

usuario[2]= {
    nome: 'Genisio Bernardo',
    idade: 89,
    sexo: 'H'
}

usuario[2].email = 'genisio.mulando@gmail.com'

//console.log(usuario[2].email)
//console.log(usuario[1] , usuario[0] , usuario[2]);
//console.log(usuario instanceof Array)
//console.log(usuario[0].nome.length)
//console.log(usuario)
console.log(usuario[0].nome.indexOf('Genisio Bernardo'))

console.log(usuario[2])

let nomes = ["Olivia", "Emma", "Mateo", "Samuel"];
//Push Inserir um elemento no final do Array
nomes.push('Victor')

//unshift Inserir um elemento no inicio do Array
nomes.unshift('Dionisio')
console.log(nomes)

// indexOf Verificar se um dado elemente consta no Array e retorna a sua posição caso não esteja retorna -1
console.log(nomes.indexOf("Mateo")); 
console.log(nomes.indexOf("Victor"));

// Pop Remover o último elemento do Arrays
nomes.pop()
console.log(nomes)

//Shift Remover o primeiro elemento do Arrays
nomes.shift()
console.log(nomes)

//Reverse inverte a ordem dos elementos do Arrays
nomes.reverse()
console.log(nomes)
//Concat junda 2 Arrays e forma um só
let nomes1 = ['Dionísio','Mulando'];
let tudoNome = nomes.concat(nomes1)
console.log(tudoNome)
*/
//Slice
let nomes = [ 'Samuel', 'Mateo', 'Emma', 'Olivia', 'Dionísio', 'Mulando' ]
let n1 = nomes.slice(0, -1)
console.log(n1)