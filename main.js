let nome  
let cidade 


console.log(typeof nome)
console.log(typeof cidade)

nome = prompt("Digite o seu nome")

cidade = prompt("Digite sua cidade")

console.log(typeof nome)
console.log(typeof cidade)


console.log("Olá, meu nome é ${nome} e eu moro em ${cidade}")










let primeiraPergunta = prompt("Você já pensou no império romano hoje?") 
let segundaPergunta = prompt("Você já pensou no império bisantino hoje?") 
let terceiraPergunta = prompt("Você já pensou no império grego hoje?") 

console.log("Você já pensou no império romano hoje?", primeiraPergunta)
console.log("Você já pensou no império bisantinoi hoje?", segundaPergunta)
console.log("Você já pensou no império grego hoje?", terceiraPergunta)







let x = 5;
let y = 10;
let z

z = x
x = y
y = z

console.log("troquei valores x = 10", x)
console.log("troquei valores y = 5", y)
 
console.log("Valores iniciais: x =", x, "e y =", y);
 



let primeiroNumero = number(prompt("insira seu primeiro número"))
let segundoNumero = number(prompt("insira seu segundo número"))

let somar = primeiroNumero+segundoNumero
console.log(somar)

let multiplicar = primeiroNumero*segundoNumero
