function check (){

    //valores
    var aluno= (document.getElementById("txtaluno")).value;
    var av1= (document.getElementById("txtav1")).value;
    var av2= (document.getElementById("txtav2")).value;
    var av3= (document.getElementById("txtav3")).value;
    var outresultado= document.getElementById("outresultado");

    //verificar notas 1 e 2
    if(av1 < 4) {
        outresultado.textContent = `${aluno}, você foi reprovado(a).`
    }
    if(av2 < 4){
        outresultado.textContent = `${aluno}, você foi reprovado(a).`
    }
    if(av3 < 4){
        outresultado.textContent = `${aluno}, você foi reprovado(a).`
    }


    //media
    if(av1 >= 4 && av2 >= 8 && av3 < av2){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av1 >= 8 && av2 >= 4 && av3 < av2){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av1 >= 5 && av2 >= 7 && av3 < av2){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av1 >= 7 && av2 >= 5 && av3 < av2){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av3 >= 4 && av2 >= 8 && av1 < av3){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av3 >= 8 && av2 >= 4 && av1 < av3){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av3 >= 5 && av2 >= 7 && av1 < av3){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av3 >= 7 && av2 >= 5 && av1 < av3){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av1 >= 4 && av3 >= 8 && av2 < av3){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av1 >= 8 && av3 >= 4 && av2 < av3){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av1 >= 5 && av3 >= 7 && av2 < av3){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if(av1 >= 7 && av3 >= 5 && av2 < av3){
        outresultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else{
        outresultado.textContent = `${aluno}, você foi reprovado(a).`
    }


}

document.getElementById("btnresult").addEventListener("click", check)