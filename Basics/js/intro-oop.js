class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    consultarDetalles() {
        return (`Nombre animal: ${this.nombre} \nTipo: ${this.tipo}`)
    }
}

class Mamifero extends Animal {
    constructor(nombre, tipo, detalles) {
        this.super(nombre, tipo);
        this.detalles = detalles;
    }

    super(nombre, tipo)
}

let animal = new Animal("León", "Mamifero");

console.log(animal.consultarDetalles());

