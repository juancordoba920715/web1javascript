var opcion
var opcionNumerosPeI
let contador=0
let opcionFactorial
let factorialIngresado
let opcioncontraseña
let opcionTablasMultiplicar
let opcionPrimos
let opcionfibonacci
var opcionTemperatura


do{
    
     opcion=Number(prompt("___________________|| Calculadora especial ||______________________\n 1- Contador de numeros pares e impares"+
    " \n 2- Calculadora Factorial \n 3- Validacion de contraseña \n 4- Generador de tablas de multiplicar \n 5- Suma de Numeros Primos"+
    "\n 6- Secuencia Fibonacci \n 7- Convertidor de Temperatura \n 8- Calculadora de Potencia \n 9 Salir del Sistema"))
   
        switch(opcion){
            case 1:
                console.log("******Contador de numeros pares e impares******")

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
                console.log("******CALCULADORA FACTORIAL******")

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
                
                console.log("******CONTRASEÑA DE USUARIO******")
                
                do{

                    opcioncontraseña = Number(prompt("1- Desea acceder?\n2- Salir"))

                    switch(opcioncontraseña){
                        case 1:
                            contador++
                            let contraseña = prompt("Por favor ingrese su contraseña")

                    if(contraseña == "secreto123"){
                        
                        console.log("Acceso concedido")
                    }else{
                        console.log("Acceso denegado")
                    }
                    }
                    console.log("operacion realizada " + contador + " veces.")
                    
                } while(opcioncontraseña!=2)             

                break;

            case 4:
                
                console.log("******TABLAS DE MULTIPLICAR******")
             
                do{
                    opcionTablasMultiplicar = Number(prompt("1- Realizar calculo\n2- Salir"))

                    switch(opcionTablasMultiplicar){

                        case 1: 
                        contador++
                            let numeroTabla=Number(prompt("Ingrese el numero"))
                                
                            for(let i=1; i<=10; i++){

                                console.log(numeroTabla + " * " + i + " = " + numeroTabla * i)
                                
                            }
                            break

                    }
                    console.log("operacion realizada " + contador + " veces.")
                
                }while(opcionTablasMultiplicar!=2)

                break;

            case 5:
                console.log("******NUMEROS PRIMOS******")

                do{
                    opcionPrimos = Number(prompt("1- Realizar calculo\n2- Salir"))

                    switch(opcionPrimos){

                        case 1: 
                        contador++
                        let sumaPrimos = 0
                            var numeroPrimo=Number(prompt("Ingrese el numero"))

                            if(numeroPrimo == 2){
                                console.log("Es primo")
                            }else if(numeroPrimo < 2){
                                console.log("No es primo")
                            }
                            for(let i = 2; i < numeroPrimo; i++){
                                if(numeroPrimo % i === 0){
                                    console.log("NO es primo")
                                }
                            }
                            console.log("Es primo")
                            console.log(sumaPrimos += numeroPrimo)

                    }
                    console.log("operacion realizada " + contador + " veces.")
                
                }while(opcionPrimos!=2)

                break;
            case 6:
                console.log("******SECUENCIA FIBONACCI******")

                do{
                    opcionfibonacci = Number(prompt("1- Realizar calculo\n2- Salir"))

                    switch(opcionfibonacci){
                        case 1:
                            contador++
                            var n1 = 0 
                            var n2 = 1
                            var resultado = 0
                            let fibonacci = Number(prompt("Ingrese el número"))

                            for( let i = 0; i < fibonacci; i++){
                                resultado = n1 + n2
                                n1 = n2
                                n2 = resultado
                                console.log(resultado)
                            }
                    }
                    console.log("operacion realizada " + contador + " veces.")


                }while(opcionfibonacci !=2 );
                break;
            case 7:
                console.log("****** CONVERSION DE TEMPERATURAS ******")

                do{
                   opcionTemperatura = number(prompt("1- Realizar conversión\n2- Salir"))

                    switch(opcionTemperatura){

                        case 1: var conversion = number(prompt("1- De celcius a fahrenheit\n2- De fahrenheit a celcius "))

                            switch(conversion){

                                case 1:
                                    var celcius = number(prompt("Ingrese los grados celcius"))

                                    var fahrenheit = (1.8 * celcius) + 32

                                    console.log(celcius + "grados celcius equivalen a  " + fahrenheit + " grados fahrenheit")

                                    break

                                case 2: 
                                var fahrenheit = number(prompt("Ingrese los grados fahrenheit"))

                                celcius = (fahrenheit - 32) / 1,8

                                console.log(celcius + "grados celcius equivalen a  " + fahrenheit + " grados fahrenheit")
                                
                                break
                                
                                default:null
                                    break
                            }

                             
                    }

                }while(opcionTemperatura != 2)

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