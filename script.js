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

saludar('Jony');
saludar('Fer');

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