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
        <td class="align-middle text-center text-sm">
        <span class="badge badge-sm bg-gradient-success">${newAuthor.status}</span>
    </td>
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
    let newAuthor = new Author(
        "team-2.jpg", 
        "Ricardo Orozco",
        "ricardo-orozco@creative-tim.com",
        "Manager",
        "Executive",
        "Online",
        "23/04/18"
    );
    
    newAuthor.addAuthor(
        "team-2.jpg", 
        "Ricardo Orozco",
        "ricardo-orozco@creative-tim.com",
        "Manager",
        "Executive",
        "Online",
        "23/04/18"
    );
    
    insertAuthor(newAuthor);

    console.log(newAuthor);
    console.log(Authors);
}