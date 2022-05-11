let ArregloRegistros = [];
let mensaje = "Hola mundo";
let dato = 5;
let encendido = true;
let Registro1;
Registro1 = [10, "Hola", true];
ArregloRegistros.push(Registro1);
function imprimirRegistros(arreglo) {
    for (let registro of ArregloRegistros) {
        console.log(registro);
    }
}
imprimirRegistros(ArregloRegistros);
console.log(mensaje);
let encabezado = document.createElement("h1");
encabezado.textContent = mensaje;
document.body.appendChild(encabezado);
//# sourceMappingURL=helloWorld.js.map