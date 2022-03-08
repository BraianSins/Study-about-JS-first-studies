console.log("Conversão de tipos")


console.log("ano " + 2020)
console.log("2" + "2") /*tá sendo lido como 2 textos*/
console.log(parseInt("2") + parseInt("2")) /* parseInt faz um numero em formato de texto ser reconhecido como número*/

console.log("10" / "2") /*Nesse caso em especifico, o JS percebe que só faz sentido ler / divindo um número, dai transforma automaticamente o texto em numero */
console.log("Braian" / "2") /*o JS tenta dividir, mas ele não consegue trasnsformar um texto em número. Volta como Not a Number*/
console.log("7" / "2")
console.log("3.5" * "2") /*o JS lê o * da mesma forma que lê o / */