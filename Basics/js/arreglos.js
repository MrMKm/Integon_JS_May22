numeros = [1, 2, 3, 4];

numeros.push(5);

console.log(numeros);
console.log(numeros[0]);
console.log(numeros.length);

for(index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}

numeros.forEach(numero => {
    console.log(numero);
}); 