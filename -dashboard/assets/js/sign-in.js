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
        $('#logInSection').hide();
        $('#welcomeDiv').show();
    }
}