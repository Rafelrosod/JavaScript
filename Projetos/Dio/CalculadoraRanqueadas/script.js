function pegarValor(){
    let vitoria = document.getElementById("vitoria").value;
    let derrota = parseInt(document.getElementById("derrota").value) ;
    let saldo = vitoria - derrota;
    var mma = calculaElo(saldo);
    alert("O Mma do jogador é : " + mma);
}
function calculaElo(saldo){
    if(saldo < 10){
        saldo = "Ferro";
    }else if(saldo > 11 && saldo < 20){
        saldo = "Bronze;"
    }else if(saldo > 21 && saldo < 50){
        saldo = "Prata";
    }
    else if(saldo > 51 && saldo < 80){
        saldo = "Ouro";
    }
    else if(saldo > 81 && saldo < 90){
        saldo = "Diamante";
    }
    else if(saldo > 91 && saldo < 100){
        saldo = "Lendário";
    }else if(saldo <= 101){
        saldo = "Imortal";
    }
    return saldo;
}
