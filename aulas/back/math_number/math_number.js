let num = 9.4;

//arredondar pra baixo
let resultado = Math.floor(num);
console.log(resultado);

//arredondar para cima
resultado = Math.ceil(num);
console.log(resultado);

//arredondamento padrão
resultado = Math.round(num);
console.log(resultado);

//encontrar o  maior valor
let maior = Math.max(1,5,300,-8);
console.log(maior);

//encontrar o menor  valor
let menor = Math.min(1,5,300,-8);
console.log(menor);

//gerar número aleatório
let aleatorio = Math.random();
console.log(aleatorio);

//gerar um número aleatório em um intervalo
let numeroMinimo = 1;
let numeroMaximo = 3;

let numeroAleatorio = Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo;
console.log(numeroAleatorio)