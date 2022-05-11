let Authors:Array<Author>=[];

class Author {
    public photo:string;
    public name:string;
    public email:string;
    public position:string;
    public subPosition:string;
    public status:string;
    public employeeDate:string;

    constructor(photo:string, name:string, email:string, position:string, subPosition:string, status:string, employeeDate:string){
        this.photo = photo;
        this.name = name;
        this.email = email;
        this.position = position;
        this.subPosition = subPosition;
        this.status = status;
        this.employeeDate = employeeDate;
    }

    addAuthor(photo:string, name:string, email:string, position:string, subPosition:string, status:string, employeeDate:string){
        let author = new Author(photo, name, email, position, subPosition, status, employeeDate);

        Authors.push(author);
    }

    getPhoto(){
        return this.photo;
    }
    
    setPhoto(photo:string) {
        this.photo = photo;
    }

    getName() {
        return this.name;
    }

    setName(name:string){
        this.name = name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email:string) {
        this.email = email;
    }

    getPosition() {
        return this.position;
    }

    setPosition(position:string) {
        this.position = position;
    }

    getSubPosition() {
        return this.position;
    }

    setSubPosition(subPosition:string) {
        this.subPosition = subPosition;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status:string) {
        this.status = status;
    }

    getEmployeeDate() {
        return this.employeeDate;
    }

    setEmployeeDate(employeeDate:string) {
        this.employeeDate = employeeDate;
    }
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

    console.log(newAuthor);
    console.log(Authors);
}