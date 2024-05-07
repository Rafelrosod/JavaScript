class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack() {
        console.log(`O ${this.nome} é um heroi classe ${this.tipo} e atacou usando ${this.ataque()}.`)
    }
    ataque() {
        let habilidade;
        if (this.tipo === "mago") {
            habilidade = "Magia"
        }else if (this.tipo === "guerreiro"){
            habilidade = "Espada"
        }else if (this.tipo === "monge"){
            habilidade = "Artes Marciais"
        }else{
            habilidade = "Shuriken"
        }
        return habilidade;  
    }
}
let novoHeroi = new heroi("Rafael", 23, "guerreiro");
novoHeroi.tipo = "mago"
novoHeroi.attack()