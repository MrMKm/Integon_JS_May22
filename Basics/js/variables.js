let datoGeneral = 100;

Calculo1();
Calculo2();

console.log(datoGeneral);

function Calculo1(){
    datoGeneral = 100;
    datoGeneral += 5;
    if(datoGeneral > 100){
        let otraVariable = 200;
        console.log(`El valor de la otra variable es: ${otraVariable}`);
    }
}

function Calculo2(){
    datoGeneral += 10;
}