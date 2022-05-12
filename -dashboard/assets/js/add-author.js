function showActors() {
    $(document).ready(function () {

        $.ajax({
            method: 'GET',
            dataType: 'json',
            url: 'http://localhost:3006/authors',
            success: function (data) {
                const authors = data.authors;
                console.log(authors);
                let newAuthor;
                authors.forEach(author => {
                    newAuthor = new Author(
                        author.photo, 
                        author.name,
                        author.email,
                        author.position,
                        author.subPosition,
                        author.status,
                        author.employeeDate
                    );
                    
                    insertAuthor(newAuthor);
                });
            }
        });
    });
}

showActors();

let Authors = [];

class Author {
    constructor(photo, name, email, position, subPosition, status, employeeDate){
        this.photo = photo;
        this.name = name;
        this.email = email;
        this.position = position;
        this.subPosition = subPosition;
        this.status = status;
        this.employeeDate = employeeDate;
    }

    addAuthor(photo, name, email, position, subPosition, status, employeeDate){
        let author = new Author(photo, name, email, position, subPosition, status, employeeDate);

        Authors.push(author);
    }

    get AllAuthors() {
        return this.Authors;
    }
}

function insertAuthor(newAuthor) {
    let table = document.getElementById('AuthorsTable');

    let insertAuthor = table.insertRow(table.rows.length);
    insertAuthor.innerHTML = `
    <td>
        <div class="d-flex px-2 py-1">
            <div>
            <img src="../assets/img/${newAuthor.photo}" class="avatar avatar-sm me-3" alt="user1">
            </div>
            <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-sm">${newAuthor.name}</h6>
            <p class="text-xs text-secondary mb-0">${newAuthor.email}</p>
            </div>
        </div>
    </td>
    <td>
        <p class="text-xs font-weight-bold mb-0">${newAuthor.position}</p>
        <p class="text-xs text-secondary mb-0">${newAuthor.subPosition}</p>
    </td>
    `;

    if(newAuthor.status === "Online") {
        insertAuthor.innerHTML += `
        <td class="align-middle text-center text-sm">
        <span class="badge badge-sm bg-gradient-success">${newAuthor.status}</span>
        </td>
        `;
    }

    else{
        insertAuthor.innerHTML += `
        <td class="align-middle text-center text-sm">
        <span class="badge badge-sm bg-gradient-secondary">${newAuthor.status}</span>
        </td>
        `;
    }

    insertAuthor.innerHTML += `
    <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">${newAuthor.employeeDate}</span>
    </td>
    <td class="align-middle">
        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
            Edit
        </a>
    </td>
    `;
}

function addAuthor() {
    let _nombre = nombre.value;
    let _email = email.value;
    let _position = position.value;
    let _subPosition = subPosition.value;
    let estatus = estatus.value;
    let _employeeDate = employeeDate.value.toString();

    let newAuthor = new Author(
        "team-3.jpg", 
        _nombre,
        _email,
        _position,
        _subPosition,
        _estatus,
        _employeeDate
    );

    $.ajax({
        method: 'POST',
        dataType: 'json',
        contentType: "application/json",
        url: 'http://localhost:3006/authors',
        data: JSON.stringify({
            photo: newAuthor.photo,
            name: newAuthor.name,
            email: newAuthor.email,
            position: newAuthor.position,
            subPosition: newAuthor.subPosition,
            status: newAuthor.status,
            employeeDate: newAuthor.employeeDate
        }),
        success: function (data) {
            console.log(data);
            alert('Author added');
            insertAuthor(data);
            showActors();
        }
    });
}