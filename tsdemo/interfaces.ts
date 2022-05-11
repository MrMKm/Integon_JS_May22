interface ITransporte {
    motor : string;
    color : string;

    frenar : ()=>void;
}

class Automovil implements ITransporte{
    public motor:string;
    public color:string;

    constructor(motor:string, color:string) {
        this.motor = motor;
        this.color = color;
    }

    frenar():void{
        console.log("Frenar");
    }
}

class Autobus implements ITransporte{
    public motor:string;
    public color:string;
    
    constructor(motor:string, color:string) {
        this.motor = motor;
        this.color = color;
    }

    frenar():void{
        console.log("Frenar");
    }
}

