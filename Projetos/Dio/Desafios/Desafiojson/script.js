let invoice = {
    name: "Rafael",
    age :  23,
    produto: "Setup monstro",
    products:{
        0: ["mouse " , 29.90],
        1:["Teclado Mecânico", 149.90],
        2:["Monitor TOP", 899.90],
        3:["Gabinete", 499.90],
    },
}
generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);
    console.log("-------------------------");

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(` - ${productName}: ${productPrice}`);
    }
    
}