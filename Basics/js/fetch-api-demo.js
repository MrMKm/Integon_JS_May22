function demoFecthAPI() {
    let url = "http://localhost:3006/authors";

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let authors = data.authors;
            authors.forEach(author => {
                console.log(author.name);
            });
        })
        .catch(function(error) {
            console.log("Server not available");
        });
}

//demoFecthAPI();