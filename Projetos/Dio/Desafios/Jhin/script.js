class jhin{
    constructor(skin){
        this.skin = skin;
    }
    historia(){
        console.log("Jhin é um meticuloso psicopata criminoso que acredita que o assassinato é uma arte. Outrora um prisioneiro ioniano, mas libertado por membros obscuros do conselho regimental de Ionia, o assassino serial agora trabalha como assassino de seu conluio. Usando a própria arma como pincel, Jhin cria obras artisticamente brutais, horrorizando vítimas e espectadores. Ele sente um cruel prazer ao fazer suas encenações nefastas, tornando-o a escolha ideal para transmitir a mais poderosa das mensagens: o terror.");
    }
    caractecristicas(){
        console.log("Jhin é um Atirador de dificuldade Moderada.");
    }
    habiblidades(){
        this.Passiva = "SUSSURRO" 
        this.q = "GRANADA DANÇANTE"
        this.w = "FLORESCER MORTAL"
        this.e = "AUDIÊNCIA CATIVA"
        this.r = "ACLAMAÇÃO"
    }
    
}
let campeaoJhin = new jhin("Projeto Jhin")
campeaoJhin.habiblidades();
console.log(campeaoJhin.q);
