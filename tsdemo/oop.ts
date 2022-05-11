class Empleado {
    public nombre:string;
    private telefono:string;

    constructor(nombre:string, telefono:string) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    getNombre() {
        return this.nombre;
    }

    getTelefono(){
        return this.telefono;
    }

    setNombre(nombre:string) {
        this.nombre = nombre;
    }

    setTelefono(telefono:string) {
        this.telefono = telefono;
    }
}

class Manager extends Empleado {
    private empleados:number;

    constructor(nombre:string, telefono:string, empleados:number) {
        super(nombre, telefono);

        this.empleados = empleados;
    }

    getEmpleados() {
        return this.empleados;
    }

    setEmpleados(empleados:number) {
        this.empleados = empleados
    }
}

let empleado = new Empleado("Ricardo Orozco", "3314879491");
console.log(empleado.nombre)
console.log(empleado.getTelefono());

let manager = new Manager("Jair Alvarez", "3314879491", 10);
console.log(manager.getNombre());
console.log(manager.getTelefono());
console.log(manager.getEmpleados())