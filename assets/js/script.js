var opcion
var opcionNumerosPeI
let contador=0
let opcionFactorial
let factorialIngresado
let opcioncontraseña




do{
    /* console.log("estudiante ingresado") */
     opcion=Number(prompt("___________________|| Calculadora especial ||______________________\n 1- Contador de numeros pares e impares"+
    " \n 2- Calculadora Factorial \n 3- Validacion de contraseña \n 4- Generador de tablas de multiplicar \n 5- Suma de Numeros Primos"+
    "\n 6- Secuencia Fibonacci \n 7- Convertidor de Temperatura \n 8- Calculadora de Potencia \n 9 Salir del Sistema"))
   
        switch(opcion){
            case 1:
                console.log("1- Contador de numeros pares e impares")

                do{
                opcionNumerosPeI=Number(prompt("1- Realizar Calculo\n2- Salir"))
                
                switch(opcionNumerosPeI){
                    case 1:
                        let numeroIngresado = Number(prompt("Ingrese un numero"))
                        let contadorPar=0
                        for(let i= 0; i<=numeroIngresado; i+=2){
                            console.log(i)
                            contadorPar++
                        }
                        console.log("\nCantidad de numeros impares " + contadorPar +"\n ")

                        contador++
                        
                        let contadorImpar=0
                        for(let i= 1; i<=numeroIngresado; i+=2){
                            console.log(i)
                            contadorImpar++
                        }

                        console.log("\nCantidad de numeros pares " + contadorImpar +"\n ")

                        console.log("cantidad de operaciones realizadas: " + contador)

                        break;

                        case 2: 
                        null
                        break;

                        default:
                        console.log("OPCION INVALIDA")
                        break;
                }
                }while(opcionNumerosPeI !=2)
                break;
//*********************************************************************************************************************************************************************
            case 2:
                console.log("2- CALCULADORA FACTORIAL")

                    do{

                        opcionFactorial = Number(prompt("1- Realizar Calculo\n2- Salir"))

                        switch(opcionFactorial){
                            case 1:
                                contador++
                                var factorial = Number(prompt("Ingrese un numero"))
                                
                        if(factorial>0){  
                                
                            for(let i = factorial - 1; i>=1; i--){

                              let resultado=factorial*=i
                                
                                console.log(resultado)

                            }
                        }else if(factorial==0){
                            console.log("El factorial de cero es 1")
                        }else if(factorial<0){
                            console.log("EL factorial solo admite número enteros positivos")

                        }else{

                        }
                        break

                        case 2: 
                            null
                            break

                            default: 
                            console.log("Opcion invalida")
                        }

                        console.log("operacion realizada " + contador + " veces.")   

                    }while(opcionFactorial !=2)

                break;

            case 3:
                contador++
                console.log("******CONTRASEÑA DE USUARIO******")
                
                do{

                    opcioncontraseña = Number(prompt("1- Desea acceder?\n2- Salir"))

                    switch(opcioncontraseña){
                        case 1:
                            let contraseña = prompt("Por favor ingrese su contraseña")

                    if(contraseña == "secreto123"){
                        
                        console.log("Acceso concedido")
                    }else{
                        console.log("Acceso denegado")
                    }
                    }

                    
                } while(opcioncontraseña!=2)             

                break;

            case 4:
                console.log("4")
                break;

            case 5:
                console.log("5")
                break;
            case 6:
                console.log("6")
                break;
            case 7:
                console.log("7")
                break;
            case 8:
                console.log("8")
                break;
            case 9:
                console.log("Saliendo")
                break
            default:
                console.log("OPCION INVALIDA")
                break;
          
        }
            
}while(opcion!=9);

    console.log("HASTA PRONTO")