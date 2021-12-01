
 
//Function validar
const validar = (factor)=>{
    factor= parseInt((prompt("cual numero quieres operar entre 1 y 20")));
    while(factor > 20 || factor < 1 || factor === "" || isNaN(factor)){
        factor=parseInt((prompt("(número fuera del rango) Debe ser un numero, entre 1 y 20")));
    }
  return  factor
};


//pasar validar() a let operacion  
let operacion = validar()

//Presentacion de numero seleccionado
console.log(`El numero ingresado: ${operacion}`)


//Inicio de operaciones (multiplicaion)
    for(let a=1; a <= operacion; a++){

        console.log(a+ "x"+ operacion +"=" +(a*operacion)) 
    };

//Inicio de operaciones (factorial)    
    for( let i = 1; i <= operacion; i++) {

        let res = 1;

        for (let j= 1; j <= i; j++) {

            res = res * j;

         };

        console.log("Factorial de " + i + " es: " + res);
    };

    







    


        
