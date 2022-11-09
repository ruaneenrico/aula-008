function calculadoraIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;  
    // `` --> Permite passar strings junto com trechos do código;
    // this --> vai referenciar à uma constante/variável 
};
// >> Criado uma função para Calcular a idade e retornar quantos anos a pessoa vai ter em y anos 
const pessoa1 = {
    nome: 'Amelia',
    idade: 23,
};
// >>  constante guardando informações de um possível usuário, com nome e idade
const pessoa2 = {
    nome: 'Márcia',
    idade: 20,
};
// >> constante guardando informações de um possível usuário, com nome e idade
const pessoa3 = {
    nome: 'Jonas',
    idade: 13, 
};
// >> constante guardando informações de um possível usuário, com nome e idade
console.log(calculadoraIdade.call(pessoa1,40)); // call --> Ligar, vai 'linkar' dados das constantes com a função
console.log(calculadoraIdade.apply(pessoa2,[24])); //  apply --> mesmo esquema do call 
// >> imprime os dados/código no back-end (console) 

alert (calculadoraIdade.call(pessoa1,40));
alert (calculadoraIdade.apply(pessoa2,[24]));