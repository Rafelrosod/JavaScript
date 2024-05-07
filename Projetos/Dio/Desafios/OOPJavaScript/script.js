class formaDeBolo{
    constructor(saborDaMassa, SaborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.SaborRecheio = SaborRecheio;
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.SaborRecheio}`)
    }
    assar(){
        console.log("Assando bolo de " + this.saborDaMassa)
    }
}

let boloDeFesta = new formaDeBolo("chocolate", "Nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")
boloPremium.escrever()
boloDeFesta.escrever()
boloPremium.assar()