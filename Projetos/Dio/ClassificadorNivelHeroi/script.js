function pegarValor(){
    let nome = document.getElementById("Heroi").value;
    let nivel = parseInt(document.getElementById("Xp").value) ;
    var value = calculaXp(nivel);
    alert("O Herói de nome: " + nome + " está no nivel: " + value);
}
function calculaXp(nivel){
    if(nivel < 1000){
        nivel = "Ferro";
    }else if(nivel > 1.001 && nivel < 2000){
        nivel = "Bronze;"
    }else if(nivel > 2.001 && nivel < 5000){
        nivel = "Prata";
    }
    else if(nivel > 5.001 && nivel < 6000){
        nivel = "Ouro";
    }
    else if(nivel > 6.001 && nivel < 7000){
        nivel = "Platina";
    }
    else if(nivel > 7.001 && nivel < 8000){
        nivel = "Diamante";
    }
    else if(nivel > 8.001 && nivel < 9000){
        nivel = "Ascendente";
    }else if(nivel >= 9.001 ){
        nivel = "Imortal";
    }
    return nivel;
}
let value = calculaXp(nivel);
alert("O Herói de nome " + nome + " está no nivel: " + value);