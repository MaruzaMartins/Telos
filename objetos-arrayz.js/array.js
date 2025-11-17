const numerosInteiros = [1,2,3,4,5]
//console.log(numerosInteiros)

let listaDeCompras = [
    {
        item: "Leite",
        quantidade: 3
    },
    {
        item: "Chocolate",
        quantidade: 10
    }
]
//console.log(listaDeCompras)

//comando para percorrer uma array: (obs: a apalavra elemento é um apelido/um
//  nome que colocamos para o elemento para sabermos oq estamos fazendo)
let numeroDeExecucao = 1
for(elemento of listaDeCompras){
    console.log(`Execução Nº ${numeroDeExecucao}`)
    console.log(elemento)
    numeroDeExecucao++
}