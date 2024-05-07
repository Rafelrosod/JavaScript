const quantidadeGolpes = parseInt(gets(8));
let minerais = ["Carvao","Ferro","Diamante","Pedra"];

for (let i = 1; i <= quantidadeGolpes; i++) {
  
  let minaIndex = (i - 1) % minerais.length;
  
 
  print(i + ":" + minerais[minaIndex]);
  
}