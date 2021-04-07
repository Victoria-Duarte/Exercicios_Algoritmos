//ExercÃ­cios Entrada Processamento Saida JS

/*

    1 - Elaborar um programa que leia o valor de um jantar. 
    Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

    Ex:
        Valor do Jantar: R$ 80.00
        Taxa do Garçom: R$ 8.00
        Total a pagar: R$ 88.00

*/

var valorjantar = Number(prompt("Valor do Jantar: "));
var taxaGarçom = valorjantar * 0.10;
var TotalPagar = valorjantar + taxaGarçom;

console.log(`JANTA: R$ ${valorjantar.toFixed(2)}`);
console.log(`GARÇOM: R$ ${taxaGarçom.toFixed(2)}`);
console.log(`TOTALPAGAR: R$  ${TotalPagar.toFixed(2)}`);

/*

    2 - Elaborar um programa que leia a duração de uma viagem em dias e horas.
    Calcule e informe a duração total da viagem em número de horas.


    Ex:
        Nº Dias: 2
        Nº Horas: 5
        Total de Horas: 53

*/

var dias = Number(prompt("Número de Dias"));
var horas = Number(prompt("Número de horas"));
var totalhoras = (dias * 24) + horas;

console.log(`DIAS: ${dias}`);
console.log(`HORAS: ${horas}`);
console.log(`TOTAL: ${totalhoras}`);

/*
    3 - Elaborar um programa que leia um número.
    Calcule e informe os seus vizinhos, ou seja, o número anterior e o número posterior  

    Exemplo:
        Nº: 15
        Vizinhos: 14 e 16

*/

var numero = Number(prompt("Digite um número"));

alert(`Anterior: ${numero-1} \n Posterior: ${numero+1}`);

/*
    4 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vÃ£o pagÃ¡-la.
    Calcule e informe o valor a ser pago por cliente.

    Exemplo:
        Valor da conta: R$ 90.00
        Nº de clientes: 3
        Valor por cliente: 30.00
*/
   


/*
    5 - Elaborar um programa para uma loja, o qual leia o preço de um prouto e informe as opções de pagamento.
    Calcule e informe o valor para pagamento Ã  vista com 10% de desconto e o valor em 3x.

    Exemplo:
        Preço: R$ 60.00
        À vista: R$ 54.00
        Ou 3x de R$: 20.00
*/
   
/*
    6 - Elaborar um programa que leia 3 notas de um aluno em uma determinada disciplina.
    Calcule e informe a mÃ©dia das notas.

    Exemplo:
        1Âª Nota: 7.5
        2Âª Nota: 8.0
        3Âª Nota: 6.4
        MÃ©dia: 7.3
*/
