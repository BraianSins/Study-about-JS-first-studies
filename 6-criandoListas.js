/*console.log("Trabalhando com Listas")
const salvador = 'salvador '
const saoPaulo = 'Sao Paulo'
const rioDeJaneiro = 'Rio de janeiro '

console.log("Destinos possiveis")
console.log(salvaor, saoPaulo, rioDeJaneiro) forma errada e muito complicada de declarar 

console.log("Trabalhando com Listas")
const salvador = 'salvador '
const saoPaulo = 'Sao Paulo'
const rioDeJaneiro = 'Rio de janeiro ' */

const listaDeDestinos = new Array( //fazer uma lista = new Array
    'Salvador ',
    'Sao Paulo',
    'Rio de Janeiro ',

)
listaDeDestinos.push('Curitiba') //adicionando elementos à minha lista sem ter que mexer no comando principal

console.log("Destinos Possiveis:")
    //consol.log('Salvador ','Sao Paulo','Rio de Janeiro ' )
console.log(listaDeDestinos)

listaDeDestinos.splice(1, 1) //sempre começa na contagem dee 0. 0=Salvador, 1=SP, etc
console.log(listaDeDestinos)
console.log(listaDeDestinos[1], listaDeDestinos[0]) // adicionando dois destinos especificos