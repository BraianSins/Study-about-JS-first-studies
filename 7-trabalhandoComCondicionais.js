console.log('Trabalhando com Condicionais')
const listaDeDestinos = new Array(
    'Salvador ',
    'Sao Paulo',
    'Rio de Janeiro ',

);

const idadeComprador = 17;
const estaAcompanhada = false;
//a linha de cima seria o botão do cliente e ele falando que é maior ou menor de idade e se for menor, se está acompanhado
const temPassagemComprada = true; //tem passagem comprada, porém é menor de idade e não tem acompanhante. Ou seja, não pode viajar
console.log("Destinos Possiveis:");
console.log(listaDeDestinos);


if (
    idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2, 1); //removendo um item

} else {
    console.log("Comprador menor de idade e não posso vender");
}

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");

}



console.log(listaDeDestinos);











// console.log(idadeComprador > 18) //idadecomprador maior que 18
// console.log(idadeComprador < 18) //idade comprador menor que 18
// console.log(idadeComprador <= 18) //idadecomprador menorr ou igual que 18
// console.log(idadeComprador >= 18) //idade comprador maior ou igual que 18
// console.log(idadeComprador === 18) // idade comprador igual a 18
//Cntrl+K+C faz dar auto complete com // idade comprador igual a 18
//Cntrl+K+C faz dar auto complete com //