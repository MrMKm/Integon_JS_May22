class Empleado {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre() {
        return this.nombre;
    }
    getTelefono() {
        return this.telefono;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}
class Manager extends Empleado {
    constructor(nombre, telefono, empleados) {
        super(nombre, telefono);
        this.empleados = empleados;
    }
    getEmpleados() {
        return this.empleados;
    }
    setEmpleados(empleados) {
        this.empleados = empleados;
    }
}
let empleado = new Empleado("Ricardo Orozco", "3314879491");
console.log(empleado.nombre);
console.log(empleado.getTelefono());
let manager = new Manager("Jair Alvarez", "3314879491", 10);
console.log(manager.getNombre());
console.log(manager.getTelefono());
console.log(manager.getEmpleados());
//# sourceMappingURL=oop.js.map