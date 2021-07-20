document.addEventListener("DOMContentLoaded", () =>{
    var n = prompt("Ingrese un numero");
    console.log("****************Solo pares ******************************\n");
    console.log("----------------Parte 1 ( Los primeros numeros pares)------------------------");
    if( n > 0){
        var pares = numeroPar(n);
        console.log(pares.join(`\n`));        
    }else{
        console.log("El numero debe ser positivo")
    }    

    console.log("----------------Parte 2 ( Los primeros numeros pares sin el cero)------------------------");
    if( n > 0){
        var pares = numeroParSinCero(n);
        console.log(pares.join(`\n`));        
    }else{
        console.log("El numero debe ser positivo")
    }
    console.log("\n");
    console.log("\n");       
    console.log("****************Suma impares ******************************\n");
    console.log("----Parte 1 ( Suma de impares de 0 hasta n)");
    var impar = impares(n);
    var cont = 0;    
    impar.forEach(element => {
        if(element < n){
            cont +=  element;             
        }        
    });
    console.log("La suma de 0 imapres hasta "+n+" es: "+cont);
    console.log("\n");
    console.log("----Parte 2 ( Suma de imapres entre un min y max)");
    var min = parseInt(prompt("Ingrese numero minimo"));
    var max = parseInt(prompt("Ingrese numero maximo"));
    var impar = imparesMinMax(min, max);  
    
    var cont = 0; 
    impar.forEach(element => {
        if(element < max){
            cont +=  element;                   
        }            
    });
    console.log("La suma entre el minimo "+min+" y maximo "+max+" de impares es: "+cont);
    console.log("\n");
    console.log("\n");   
    console.log("****************Secuencia de Fibonacci ******************************\n");
    //var n = prompt("Ingrese un numero");
    var arreglo = fibonacci(n);
    arreglo.forEach(element => {
        console.log(element+"\n");
    });
    
});

function numeroPar(n){      
    arrPares = [];    
    cont = 0;    
    num = 0;
    while (cont < n) {
        if(num % 2 == 0){ 
                    
            arrPares.push(num);
            cont += 1;     
        }
        num += 1;
    }    
    return arrPares;   
}

function numeroParSinCero(n){   
    arrPares = [];    
    cont = 0;    
    num = 1;

    while (cont < n) {
        if(num % 2 == 0){         
            arrPares.push(num);
            cont += 1;     
        }
        num += 1;
    }    
    return arrPares;   
}

function impares(n){   
    arrPares = [];   
    cont = 0;    
    num = 0;
    while (cont < n) {
        if(num % 2 != 0){
            
            arrPares.push(num);
            cont += 1;                  
        }       
        num += 1;
    }    
    return arrPares;    
}

function imparesMinMax(min, max){    
    
    arrPares = [];     
    num = min;  
    minimo = min; 
    while (minimo < max) {
        if(num % 2 != 0){            
            arrPares.push(num);
            minimo += 1;                      
        }       
        num += 1;
    }    
    return arrPares;    
}

function fibonacci(n){
	var i = 0;	
	var arreglo = [];
	valor = parseInt(n);
	for (i; i<valor+1; i++){
		if(i==0){
			arreglo.push(0);
		}
		else if(i==1){
			arreglo.push(1);
		}
		else{
			arreglo.push(arreglo[i-1]+arreglo[i-2]);
		}
	}
    return arreglo;
}





