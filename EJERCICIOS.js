/* 
Integrantes___________________ GRUPO 2
ALEXANDER DERIAN JAPA CANTARO 
JULIO MARTIN RODRIGUEZ ROSADO 
MAYRA HERMELINDA TORRES POVIS 
YAZMIN FIORELLA CASTILLO ALVARADO 
YENIFER PILAR CAHUANA PACHA 
*/

/* Ejercicio 1 */
/*
Se debe permitir ingresar dos números, luego mostrar la suma y el producto de ambos
*/

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

function sumarNumeros(num1, num2) {
  return num1 + num2;
}

function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}

/* Document write */
document.write('Ejecicio 1: ');
document.write('<br>');
document.write('El resultado entre la suma de ' + num1 + ' y ' + num2 + ' es: ' + sumarNumeros(num1, num2));
document.write('<br>');
document.write('El resultado entre la multiplicación de ' + num1 + ' y ' + num2 + ' es: ' + multiplicarNumeros(num1, num2));

/* Ejercicio 2 */

/*
Se debe permitir ingresar un número entero, luego mostrar el 20% de este número. 
*/

let num3 = Math.floor(Math.random() * 1000);

function porcentaje(num3) {
    return Math.floor(num3 * 0.2);
}

/* Document write */
document.write('<br>');
document.write('Ejecicio 2: ');
document.write('<br>');
document.write('El 20% de ' + num3 + ' es: ' + porcentaje(num3));


/* Ejercicio 3 */

/*
Se debe permitir ingresar un valor en metros, luego mostrar su valor en centímetros y en milímetros.  
Datos:  
• 1 metro es 100 centímetros. 
• 1 centímetro es 10 milímetros. */

let num4 = Math.floor(Math.random() * 1000);

function metrosACentimetros(num4) {
    return num4 * 100;
}

function metrosAMilimetros(num4) {
    return num4 * 1000;
}

/* Document write */
document.write('<br>');
document.write('Ejecicio 3: ');
document.write('<br>');
document.write('El valor de ' + num4 + ' metros en centímetros es: ' + metrosACentimetros(num4));
document.write('<br>');
document.write('El valor de ' + num4 + ' metros en milímetros es: ' + metrosAMilimetros(num4));

/* Ejercicio 4 */
/*
Ingresando la base y altura de un triángulo, luego mostrar su área.  
*/

let base = Math.floor(Math.random() * 10);
let altura = Math.floor(Math.random() * 10);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

/* Document write */
document.write('<br>');
document.write('Ejecicio 4: ');
document.write('<br>');
document.write('El área del triángulo con base ' + base + ' y altura ' + altura + ' es: ' + areaTriangulo(base, altura));
document.write('<br>');





//5. Ingresar un valor en dolares, luego mostrar su equivalente en soles. 
//Dato: 1 dolar es 3.38 soles

let valor;
let dolar;

//valor = prompt("Ingresar un valor en dolares");
// Elije numero al azar de 0 al 30
valor = Math.floor(Math.random() * 30);
dolar = 3.38

equivsoles = valor*dolar
//document.write("El equivalente en soles es de: ", equivsoles);
document.write('Ejercicio 5: ');
document.write('<br>');
document.write('El equivalente en soles de ' + valor + ' en dolares es: ' + equivsoles);
document.write('<br>');


//6. Leer una medida en pulgadas e imprimir su equivalente en milimetros. 
//Dato: (25.4 mm = 1 pulgada)

let medida;
let pulgada;

//valor = prompt("Ingresar una medida en pulgadas");
// Elije numero al azar del 0 al 100
valor = Math.floor(Math.random() * 100);
pulgada = 25.4

equivmili = medida*pulgada
//document.write("El quivalente en milimetros es de: ", equivmili);
document.write('Ejercicio 6: ');
document.write('<br>');
document.write('El equivalente en milimetros de ' + valor + ' en pulgadas es: ' + equivmili);
document.write('<br>');


/*7.Ingresar un número de 3 cifras y luego mostrar la suma de sus cifras elevada al cuadrado.*/

/*Definir*/

numero=111
let numero1=Math.trunc(numero/100);
let numero2=match.trunc(numero/10)-numero1*10;
let numero3=numero-numero1*100-numero2*10;
console.log(numero1+numero+numero3)*(numero1+numero+numero3);


a=trunc(numero/100);
b=trunc(numero/10)*(1/10);
c=numero*(1/10);

a+b+c





/*8.Se debe ingresar un monto de dinero, luego mostrar cuanto le toca 
a cada socio segun la siguiente tabla: 
Socio Porcentaje 
A 30% 
B 20% 
C 50% 
*/

let monto; 
let socioA;
let socioB;
let socioC;

//monto = prompt("Ingresar monto de dinero");
monto = Math.floor(Math.random() * 1000);

socioA = monto*(30/100);
socioB = monto*(20/100);
socioC = monto*(50/100);

document.write('Ejercicio 8: ');
document.write('<br>');
document.write("Al socio A le toca ", socioA, " soles, al socio B le toca ", socioB, " soles, y al socio C le toca ", socioC, " soles.");


/*9.*/
/* Ejercicio 9 JM */

/*
Desarrollar un algoritmo que pida el ingreso del precio base de un producto y se debe calcular el IGV 
(19% del precio base), luego mostrar el valor del IGV y el precio final del producto (precio base más el IGV). 
*/

let precioBase = Math.floor(Math.random() * 1000);

function igv(precioBase) {
    return precioBase * 0.19;
}

function precioFinal(precioBase) {
    return precioBase + igv(precioBase);
}

/* Document write */
document.write('<br>');
document.write('Ejecicio 9: ');
document.write('<br>');
document.write('El IGV de ' + precioBase + ' es: ' + igv(precioBase));
document.write('<br>');
document.write('Con un precio final de: ' + precioFinal(precioBase));




/*10 JM/
/*
Una empresa realiza anualmente un evento para fines solidarios con las comunidades nativas del Perú, para ello, se requiere un algoritmo que permita ingresar la cantidad de entradas vendidas de los tres tipos 
detallados en el siguiente tarifario: 

Concepto Precio 
Entrada general S/ 150.00 
Entrada para mayores de 65 S/ 50.00 
Entrada para menores de 
edad S/ 80.00 
 
Luego mostrar la cantidad de dinero recaudado por cada tipo de tarifa y el monto recaudado en total. 
*/

let entradasGenerales = Math.floor(Math.random() * 100);
let entradasMayores = Math.floor(Math.random() * 100);
let entradasMenores = Math.floor(Math.random() * 100);

function recaudacionGenerales(entradasGenerales) {
    return entradasGenerales * 150;
}

function recaudacionMayores(entradasMayores) {
    return entradasMayores * 50;
}

function recaudacionMenores(entradasMenores) {
    return entradasMenores * 80;
}

function recaudacionTotal(entradasGenerales, entradasMayores, entradasMenores) {
    return recaudacionGenerales(entradasGenerales) + recaudacionMayores(entradasMayores) + recaudacionMenores(entradasMenores);
}

/* Document write */
document.write('<br>');
document.write('Ejecicio 10: ');
document.write('<br>');
document.write('La recaudación por entradas generales es: ' + recaudacionGenerales(entradasGenerales));
document.write('<br>');
document.write('La recaudación por entradas para mayores es: ' + recaudacionMayores(entradasMayores));
document.write('<br>');
document.write('La recaudación por entradas para menores es: ' + recaudacionMenores(entradasMenores));
document.write('<br>');
document.write('La recaudación total es: ' + recaudacionTotal(entradasGenerales, entradasMayores, entradasMenores));

