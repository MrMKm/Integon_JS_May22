function getUsers() {
    let url = "http://localhost:3006/users";

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let users = data.users;
            signIn(users);
            console.log(users);
        })
        .catch(function(error) {
            console.log("Server not available");
        });
}

function signIn(users) {
    let _email = email.value;
    let _password = password.value;

    if(!users.some(e => e.email === _email && e.password === _password))
        alert('Credenciales invalidas...');

    else{
        let section = document.getElementById("logInSection");

        section.innerHTML = `
        <div class="page-header min-vh-75">
            <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div class="card card-plain mt-8">
                    <div class="card-header pb-0 text-left bg-transparent">
                    <h3 class="font-weight-bolder text-info text-gradient">Welcome back ${_email}</h3>
            </div>
        <div class="col-md-6">
            <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
            <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url('../assets/img/curved-images/curved6.jpg')"></div>
            </div>
        </div>
        `;
    }
}