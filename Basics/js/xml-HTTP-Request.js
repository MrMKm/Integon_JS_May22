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
            console.log(JSON.stringify(data));

            let list = document.getElementById("alumnosList");

            let li = document.createElement("li");

            data.alumnos.forEach(alumno => {
                console.log(alumno.name);
                li.innerText = alumno.name + ' ' + alumno.apellido;
                list.appendChild(li);
            });
        }
    }
    xhttp.send();
}

AccesoAPI();