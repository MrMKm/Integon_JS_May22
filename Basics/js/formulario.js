let registros = []

function getDatos(){
    let _nombre = nombre.value;
    let _edad = +edad.value;
    let _ingreso = +ingreso.value;

    if(_nombre === "")
        alert('Ingresa un nombre...');
    
    else if(_edad === 0)
        alert('Ingresa tu edad...');

    else if(_ingreso === 0)
        alert('Ingresa tu ingreso...');
    
    else
    {
        let registro = {
            "Nombre" : _nombre,
            "Edad" : _edad,
            "Ingreso" : _ingreso
        }
    
        console.log(registro);
        alert('Registro creado!!!');

        registros.push(registro);

        console.log(registros);
    }
}