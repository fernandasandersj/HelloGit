console.log("hola");

/* declaracion ; condicion ; incremento   

En el bucle se tiene que declarar la variable que se va a utilizar. Se puede declarar más de una en caso de que se quieran usar poniendo una coma (no punto y coma) entre ellas. En el caso de las condiciones se tiene que poner además un operador lógico  ( && , || )

break para salir del bucle 
continue para saltar una iteracion (sentencia)
*/ 

console.log('bucle for')

for( let i=0, j=10 ; i < 5 && j > 5  ; i++, j--){
    console.log(i,j);
}

/* En un bucle anidado si se cumple la primera condicion pasa al otro bucle y hasta que se termina el de dentro no sale. Vuelve a empezar desde fuera, y entra otra vez en el bucle de dentro que se vuleve a completar. 

Entiendo que el de dentro siempre se completara mientras que la condicion primera se cumpla. Es como si tuviesemos una lista y sería 1 1.1 1.2 1.3 1.4.... 2 2.1 2.2 2.3 2.4 ... el ?.1 ?.2 ?.3 ?.4 no cambia, pero su condicion principal si. Si por ejemplo quisiesemos añadir un punto a todos los alumnos con 5 un primer bucle sería la búsqueda del alumno y después el sumatorio o restar de la todas las asignaturas o solo de aquellas que cumplan con las condiciones indicadas 

La opción ideal de usar el for es cuando sabes las veces exactas que quieres iterar o como es el progreso exacto*/

console.log('bucle encadenado')

for ( x=1 ; x<=10 ; x++){

    for(y=1; y<=10; y++){
        const resultado = x*y;
        console.log(x + 'x' + y + '=' + resultado)
    }

} 

console.log('funcion')

function saludar(nombre){
    console.log('Hola' + nombre)
}

saludar(' Jony');
saludar(' Fer');

console.log('suma')

function sumar(a,b) {
    const resultadoSuma= a+b
    console.log (resultadoSuma); 
}


function restar(a, b){
    const resultadoResta =a - b
    console.log(resultadoResta);
}

function multiplicacion(a, b){
    return a*b
}

sumar(2,6)
restar(4,8)

console.log(multiplicacion(3,4));

const nombreFuncionFlecha = () => {
    //que debe hacer la funcion.    
}

const sumarFelcha = (a,b) => a+b

console.log (sumarFelcha(4,5) + ' -> funcion flecha')



//Concatenaciones


let grettings= 'Hello';
let nombre1 = ', Juan';
let nombre2 = ', Fernanda';

console.log(grettings + nombre1);
console.log(grettings + nombre2);

function saludo(grettings, nombre1, nombre2){
console.log(grettings +', ' + nombre1);
console.log(grettings + ', ' + nombre2);
}

saludo('Gracias', 'Juan', 'Fernanda');

//metodo concat() para unir dos cadenas de texto

let str1= 'Hello';
let str2= 'World'; 
let str3= '!!!!!'; 
let result = str1.concat(' ' ,str2);

console.log(result);

function saludoMetodo(str1,str2,str3){
    //return para que lo que me devuelve se pueda guardar una variable FUERA de la funcion. 
    return str1.concat(' ',str2, str3);
}

console.log(saludoMetodo(str1,str2,str3));

//para concatenar aun mejor utilizar $ en vez del método OJO con la comilla al revés 
 result = str1.concat(' ' ,str2);
let resultDolar = `${str1}${str2}${str3}`;

console.log(resultDolar);

// Ejempelo de como saber que tipo de dato tiene una variable

let cambioTipoVariable = "Tipo de variable String";

console.log(typeof cambioTipoVariable);

cambioTipoVariable = 24 ;

console.log(typeof cambioTipoVariable );

// En caso de que se proporcione una variale de tipo "null" nos devolverá un dato tipo objeto. Se considera un bug, de que está hecho mal JS desde el inicio que nunca se cambio. 

cambioTipoVariable = null;

console.log(typeof cambioTipoVariable );

// recordar que un valor indefinido, es una variable que se ha declarado, pero que aún no almacenada nada. Por eso " no está definido " . Null por otro lado es que no tiene ningún valor. No que no contenga nada, si no que lo que contiene no tiene valor. 

// ejemplo de un objeto S

let pet = {
  name: "Fluffy",
  age: 3,
  type: "dog"
};

// Se puede utilizar Symbol puede utilizarse como identificador de las propiedades de los objetos.

const crypticKey1= Symbol("saltNpepper");
const crypticKey2= Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false

//BigInt Para valores numericos muy largos

