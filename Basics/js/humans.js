class Humans{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    info(){
        return console.log(this);
    }
}

let ricardo = new Humans("Ricardo", 23, "Male");
let monse = new Humans("Monserrat", 24, "Female");

ricardo.info();
monse.info();