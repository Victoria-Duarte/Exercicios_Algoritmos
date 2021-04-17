/*
   1 - Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e o preço do veículo.
   Deve, então, apresentar como resposta o valor da entrada (50%) e restante em 12x.

*/

function converter() {

     //campos
    var txtmodelo = document.getElementById(`txtmodelo`);
    var txtpreço = document.getElementById(`txtpreço`);
    var outmodelo = document.getElementById(`outmodelo`);
    var outresultado = document.getElementById(`outpreço`);
    
    //valores
    var modelo = txtmodelo.value;
    var preço = Number(txtpreço.value);

    //converter resultado
    var preço1 = preço / 2;
    var preço2 = Math.ceil(preço1 / 12);

    //resultado
    outmodelo.textContent = modelo;
    outpreço.textContent = `Entrada de R$ ${preço1} + 12x de R$ ${preço2}`;

}
/*

/*
   2 - Elaborar um programa para um restaurante que leia o preço por kg e o consumo em gramas de um cliente.
   Exiba o valor a ser pago.
   
*/

function convertern2() {

    //campos
    var gramasprato = document.getElementById(`gramasprato`);
    var preçoporkg = document.getElementById(`preçoporkg`);

    //valores
    var gramaspratoAAAAA = Number(gramasprato.value);
    var preçokg = Number(preçoporkg.value);

    //converter resultado
    var preçodoprato = (preçokg * gramaspratoAAAAA) / 1000;

    //resultado
    outpreçototalnessaPORRA.textContent = `Valor à pagar R$ ${preçodoprato}`;

}

/*
   3 - Elaborar um programa para uma lan house de um aeroporto. 
   O programa deve ler o valor de cada 15 min de uso de um computador e o tempo de uso por um cliente em minutos.
   Informe o valor a ser pago pelo cliente, sabendo que as frações de 15 minutos devem ser cobradas de forma integral.

*/

    function converterlan() {

        //campos
        var txtmin = document.getElementById(`txtmin`);
        var txtpreçolan = document.getElementById(`txtpreçolan`);
        var outpreçolan = document.getElementById(`outpreçolan`);
    
        //valores
        var totaltempo = Number(txtmin.value);
        var preçolan = Number(txtpreçolan.value);

        //cálculo
        var preçototal = totaltempo / 15;
        var preçototal2 = Math.ceil(preçototal);
        var resultafinal = preçototal2 * preçolan;
    
        //exibir
        outlanhouse.textContent = `Valor total a pagar: R$ ${resultafinal}`

    }