type Registro = [number, string, boolean];
let ArregloRegistros:Array<Registro>=[];

let mensaje:string = "Hola mundo";
let dato:number = 5;
let encendido:boolean = true;

let Registro1:Registro;
Registro1 = [10, "Hola", true];
ArregloRegistros.push(Registro1);

function imprimirRegistros(arreglo:Array<Registro>):void {
    for(let registro of ArregloRegistros){
        console.log(registro);
    }
}

imprimirRegistros(ArregloRegistros)

console.log(mensaje);

let encabezado = document.createElement("h1");
encabezado.textContent = mensaje;

document.body.appendChild(encabezado);