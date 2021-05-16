function verificar (){

    //check campos
    var valorsaque= document.getElementById("saque").value;
    var outnota1 = document.getElementById("outresultado1").value;
    var outnota2 = document.getElementById("outresultado2").value;
    var outnota3 = document.getElementById("outresultado3").value;


    //verify
    var numero = 10

    if (valorsaque % numero === 0){}

    else {
        alert("Notas Indisponíveis.")
        txtValor.focus()
        return;
    }

    if (valorsaque <= 0 || valorsaque == ''){
        alert("Por favor insira um valor corretamente.")
        txtValor.focus();
        document.getElementById("saque").value == '';
        return;
    }


    //nota separada
    var nota100 = 100;
    var nota50 = 50;
    var nota10 = 10;



    //conta
    if (valorsaque >= 100){
        if (nota100 >= 0){
            nota100 = Math.floor(valorsaque / 100);
            valorsaque = valorsaque % 100;
            outresultado1.textContent = `Nota(s) de 100: ${nota100}`;
        }
    }
    if (valorsaque >= 50){
        if (nota50 >= 0){
            nota50 = Math.floor(valorsaque / 50);
            valorsaque = valorsaque % 50;
            outresultado2.textContent =`Nota(s) de 50: ${nota50}`;

        }
    }
    if (valorsaque >= 10){
        if (nota10 >= 0){
            nota10 = Math.floor(valorsaque / 10);
            valorsaque = valorsaque % 10;
            outresultado3.textContent =`Nota(s) de 10: ${nota10}`
        }
    }
     
}

function limpar(){

    document.getElementById("saque").value = '';
    outresultado1.textContent = ``;
    outresultado2.textContent =``;
    outresultado3.textContent =``;
}

document.getElementById(`btnverificar`).addEventListener(`click`, verificar)
document.getElementById(`btnlimpar`).addEventListener(`click`, limpar)