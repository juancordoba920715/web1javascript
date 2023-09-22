var opcion
var opcionNumerosPeI
//let contador=0
let opcionFactorial
let factorialIngresado
let opcioncontraseña
let opcionTablasMultiplicar
let opcionPrimos
let opcionfibonacci
let contadorUno = 0
let contadorDos = 0
let contadorTres = 0
let contadorCuatro = 0
let contadorCinco = 0
let contadorSeis = 0
let contadorSiete = 0
let contadorOcho = 0


do{
    
     opcion=Number(prompt("___________________|| Calculadora especial ||______________________\n 1- Contador de numeros pares e impares"+
    " \n 2- Calculadora Factorial \n 3- Validacion de contraseña \n 4- Generador de tablas de multiplicar \n 5- Suma de Numeros Primos"+
    "\n 6- Secuencia Fibonacci \n 7- Convertidor de Temperatura \n 8- Calculadora de Potencia \n 9 Salir del Sistema"))
   
        switch(opcion){
            case 1:
                console.log("******Contador de numeros pares e impares******")
                console.log("muestra la cantidad de números pares o impares dentro del rango desde 1 hasta el número ingresado.")

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

                        contadorUno++
                        
                        let contadorImpar=0
                        for(let i= 1; i<=numeroIngresado; i+=2){
                            console.log(i)
                            contadorImpar++
                        }

                        console.log("\nCantidad de numeros pares " + contadorImpar +"\n ")

                        console.log("cantidad de operaciones realizadas: " + contadorUno)

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
                console.log("En la fórmula Factorial se deben multiplicar todos los números enteros y positivos que hay entre el número ingresado y el número 1")

                    do{

                        opcionFactorial = Number(prompt("1- Realizar Calculo\n2- Salir"))

                        switch(opcionFactorial){
                            case 1:
                                contadorDos++
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

                        console.log("operacion realizada " + contadorDos + " veces.")   

                    }while(opcionFactorial !=2)

                break;

            case 3:
                
                console.log("******CONTRASEÑA DE USUARIO******")
                console.log("Valida la contraseña que ingresaras al sistema, si es valida te dara acceso de lo contrario no permitira tu acceso")
                
                do{

                    opcioncontraseña = Number(prompt("1- Desea acceder?\n2- Salir"))

                    switch(opcioncontraseña){
                        case 1:
                            contadorTres++
                            let contraseña = prompt("Por favor ingrese su contraseña")

                    if(contraseña == "secreto123"){
                        
                        console.log("Acceso concedido")
                    }else{
                        console.log("Acceso denegado")
                    }
                    }
                    console.log("operacion realizada " + contadorTres + " veces.")
                    
                } while(opcioncontraseña!=2)             

                break;

            case 4:
                
                console.log("******TABLAS DE MULTIPLICAR******")
                console.log("Muestra la tabla de multiplicar del numero que desea, esta ira hasta el numero 10")
             
                do{
                    opcionTablasMultiplicar = Number(prompt("1- Realizar calculo\n2- Salir"))

                    switch(opcionTablasMultiplicar){

                        case 1: 
                        contadorCuatro++
                            let numeroTabla=Number(prompt("Ingrese el numero"))
                                
                            for(let i=1; i<=10; i++){

                                console.log(numeroTabla + " * " + i + " = " + numeroTabla * i)
                                
                            }
                            break

                    }
                    console.log("operacion realizada " + contadorCuatro + " veces.")
                
                }while(opcionTablasMultiplicar!=2)

                break;

            case 5:
                console.log("******NUMEROS PRIMOS******")
                console.log("Mostrara todos los numeros primos que hay desde el 2 hasta el numero que ingresaste")

                do{
                    opcionPrimos = Number(prompt("1- Realizar calculo\n2- Salir"))

                    switch(opcionPrimos){

                        case 1: 
                        contadorCinco++
                        let sumaPrimos = 0
                            var numeroPrimo=Number(prompt("Ingrese el numero"))

                            if(numeroPrimo == 2){
                                console.log(numeroPrimo +"Es primo")
                                sumaPrimos += numeroPrimo
                               
                            }else if(numeroPrimo < 2){
                                console.log("No es primo")
                            }
                            for(let i = 2; i < numeroPrimo; i++){
                                if(numeroPrimo % i === 0){
                                    console.log("NO es primo")
                                }else{
                                    console.log("Es primo")
                                    
                                }
                            }
                           
                            
                            

                    }
                    console.log("operacion realizada " + contadorCinco + " veces.")
                
                }while(opcionPrimos!=2)

                break;
            case 6:
                console.log("******SECUENCIA FIBONACCI******")
                console.log("Mostrara la secuencia desde el numero 1 hasta el numero que ingreses")

                do{
                    opcionfibonacci = Number(prompt("1- Realizar calculo\n2- Salir"))

                    switch(opcionfibonacci){
                        case 1:
                            contadorSeis++
                            var n1 = 0 
                            var n2 = 1
                            var resultado = 0
                            let fibonacci = Number(prompt("Ingrese el número"))
                            console.log(n1)
                            console.log(n2)

                            for( let i = 3; i <= fibonacci; i++){
                                resultado = n1 + n2
                                n1 = n2
                                n2 = resultado
                                console.log(resultado)
                            }
                    }
                    console.log("operacion realizada " + contadorSeis + " veces.")


                }while(opcionfibonacci !=2 );
                break;
            case 7:
                console.log("****** CONVERSION DE TEMPERATURAS ******")
                console.log("Te muestra el equivalente de temperatura entre celcius y fahrenheit o fahrenheit y celcius")

                do{
                
                   var opcionTemperatura = Number(prompt("1- Realizar conversión\n2- Salir"))

                    switch(opcionTemperatura){

                        case 1: 
                        contadorSiete
                        var conversion = Number(prompt("1- De celcius a fahrenheit\n2- De fahrenheit a celcius "))

                            switch(conversion){

                                case 1:
                                    var celcius = Number(prompt("Ingrese los grados celcius"))

                                    var fahrenheit = (1.8 * celcius) + 32

                                    console.log(celcius + " grados celcius equivalen a  " + fahrenheit + " grados fahrenheit")

                                    break

                                case 2: 
                                var fahrenheit = Number(prompt("Ingrese los grados fahrenheit"))

                                celcius = (fahrenheit - 32) / 1.8

                                console.log(fahrenheit + " grados fahrenheit equivalen a  " + celcius + " grados celcius")
                                
                                break


                                default: 
                                console.log("Opcion invalida")
                                break   
                            }
                            console.log("operacion realizada " + contadorSiete + " veces.")
                             
                    }

                }while(opcionTemperatura != 2)

                break;
            case 8:
                console.log("****** CALCULADORA DE POTENCIAS ******")
                console.log("Eleva a la pontencia que desees el numero base que desees")

                do{
                
                   var opcionPotencia = Number(prompt("1- Realizar calculo\n2- Salir"))
 
                     switch(opcionPotencia){
 
                         case 1: 
                         contadorOcho++
                         var numeroBase = Number(prompt("Ingrese el numero base"))
                         var potencia = Number(prompt("Ingrese la pontencia"))

                         console.log("el numero " + numeroBase + " elevado a la potencia " + potencia + " da como resultado " + numeroBase ** potencia)
 
                        break  
                             
                        }
                        console.log("operacion realizada " + contadorOcho + " veces.")
 
                 }while(opcionPotencia != 2)

                 

                break;
            case 9:
                console.log("Saliendo")
                break
            default:
                console.log("OPCION INVALIDA")
                break;
          
        }
            
}while(opcion!=9);

var contadorGeneral=[contadorUno, contadorDos, contadorTres, contadorCuatro, contadorCinco,contadorSeis,contadorSiete,contadorOcho]
var contadorOpciones = ["Contador de numeros pares e impares","CALCULADORA FACTORIAL","CONTRASEÑA DE USUARIO","TABLAS DE MULTIPLICAR","NUMEROS PRIMOS","SECUENCIA FIBONACCI","CONVERSION DE TEMPERATURAS","CALCULADORA DE POTENCIAS"]
var valorMaximo = contadorGeneral[0]; 
var valorMinimo = valorMaximo; 

for (var i = 0; i < contadorGeneral.length; i++) {
    
  if (contadorGeneral[i] >valorMaximo) {
         valorMaximo = contadorGeneral[i];
    }   
    }

    for(var j = 0; j < contadorGeneral.length;j++){
        if (contadorGeneral[j] ===valorMaximo) {
            console.log("\n:El ejercicio mas ejecutado : "+contadorOpciones[j] +valorMaximo+"  veces");   
       }   
    }

for (var i = 0; i < contadorGeneral.length; i++) {
        
      if (contadorGeneral[i] <valorMinimo) {
             valorMaximo = contadorGeneral[i];
        }   
        }
    
        for(var j = 0;j< contadorGeneral.length;j++){
            if (contadorGeneral[j] ===valorMinimo) {
                console.log("\nEl ejercicio menos ejecutado: " +contadorOpciones[j] +valorMinimo+ "  veces ");   
           }   
        }



    console.log("HASTA PRONTO")