let saldoinicial = 0
let saldoatual = 0
let continuar = true

while (continuar){
    saldoinicial = parseFloat(prompt("digite o saldo inicial"))
    saldoatual = saldoinicial

tipodeentrada = parseInt(prompt("digite o tipo de operação 1- para compra e 2- para venda"));
qtd = parseInt(prompt("digite a quantidade de peças"));

 if (tipodeentrada === 1) {
    saldoatual += qtd
 } else if (tipodeentrada === 2) {
    if (qtd > saldoatual) {
    console.log ("saldo insuficiente");
 } else { 
    saldoatual -= qtd;
    
 }
 

}



 console.log ("o saldo atual e ", saldoatual);

 const resposta = prompt("eseja continuar? (s/n)");
 if (resposta === "n") {
    continuar = false
 }


}
console.log ("acabou")
