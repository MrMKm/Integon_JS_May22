function AccesoAPI() {
    console.log("Llamando al server")
    const url = "http://127.0.0.1:3006/alumnos";

    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url);
    xhttp.setRequestHeader('Accept', 'application/json');

    // Se delega el evento onreadystatechange 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            showAlumnos(data);
            console.log(JSON.stringify(data));
        }
    }
    xhttp.send();
}

function showAlumnos(data) {
    let table = document.getElementById("alumnosList");

    let alumno = document.createElement("li");

    data.items.forEach(function(item) {
        alumno.innerText = `${item.name}`;
        table.appendChild(item);
    });
}

AccesoAPI();