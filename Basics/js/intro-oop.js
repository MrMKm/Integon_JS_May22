class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    consultarDetalles() {
        return (`Nombre animal: ${this.nombre} \nTipo: ${this.tipo}`)
    }
}

let animal = new Animal("León", "Mamifero");

console.log(animal.consultarDetalles());