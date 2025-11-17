const idade = 56
/**
if(idade >= 18){
    console.log("Você é maior de idade")
}else {
    console.log("Você é menor de idade")
}
    */

if(idade < 18){
    console.log("Você é menor de idade")
}else if(idade >= 18  && idade < 65){
    console.log("Você é adulto")
}else{
    console.log("Você é idosa")
}

let salario = 2000
if(salario > 1500 || idade < 18){
    console.log("verdadeiro")
}
console.log(idade > 18)
console.log(idade > 18 && salario > 1500)
console.log(idade < 18 && salario > 1500)
console.log(idade < 18 || salario > 1500)

const resultado = 3 % 3
switch (resultado) {
    case 0: console.log("o número é par")
        
        break;

    case 1: console.log("o número é impar")
    
        break;

    default: console.log("número desconhecido")
        break;
}