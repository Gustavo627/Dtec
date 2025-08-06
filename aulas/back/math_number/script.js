const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; 

texto.innerHTML += `<p class="texto"><strong>A raíz quadrada é:</strong> ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p class="texto"><strong>É inteiro?:</strong> ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p class="texto"><strong>Seu número é NaN?:</strong> ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p class="texto"><strong>Arredondado pra baixo:</strong> ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p class="texto"><strong>Arredondado pra cima:</strong> ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p class="texto"><strong>Valor com duas casas decimais:</strong> ${numero.toFixed(2)}</p>`;