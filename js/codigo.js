/*var cualquiernombre = "cualquier";
var uno = "hola1";
var Uno = "hola2" //el ; no es necesario en js



document.getElementsByTagName("h1")[0].innerHTML= "hola";//trae un array este es el primer h1
var nombre="johan";
var apellido="nieto", edad=25;
var ciudad;
ciudad= "san antonio";

var nulo=null;//le asigne nulo

var precioUnidad =25;//primera en minus, segunda en mayus
var cantidad = 75;

var total= precioUnidad * cantidad;

//alert(total);

var balonFutbol=15, balonBasket=7, pelotaBaseball=9;//varias declaraciones en una linea

var totalCompra= balonFutbol+balonBasket+pelotaBaseball;//asignar toda una operacion

console.log(totalCompra);//muestra en consola

console.log(12%5);// 12/5  2*5=10 12-10=2->residuo o resto de la division*/


/*var num=5;//num= num+1
console.log (++num);//=6
console.log (num++)//=6 en la siguiente linea ya sera un 7
console.log(num);//7
console.log(num--);//7
console.log(num);//6
console.log(--num);//5

num+=7;
console.log(num);//12

num-=2;
document.write(num+"<br>");//10 numero +(concatenar) la etiqueta de salto de linea <br>

num*=3;
document.write(num+"<br>");//30

num/=2;
document.write(num+"<br>");//15

num%=8;
document.write(num+"<br>");//7

//todo escrito despues de la llamada del archivo script justo antes de que termine el body*///1

/*var n="johan &nbsp;", a="apellido";//&nsbp un espacio
document.write(n+a);
var textnum="25"
document.write(num+textnum+"<br>");//725
document.write(num+Number(textnum));//32


var nombrecito= prompt("como te llamas"); //ventana modal, que muestre el mensaje en string, y lo ingresado lo guarda en la variable

document.write(nombrecito);*///2

/*
var n1,n2;

n1=prompt("ingresa el primer numero");
n2=prompt("ingresa el segundo numero");
var totalcito=n1*n2;
document.write("<p>");//abre un parrafo

document.write(n1+" x "+n2+"<b> = </b>"+"<em>"+totalcito+"</em>"); //recordar b de bold, y em de italica siempre concatenar los valores

document.write("</p>");//lo cierro aqui
*///3


/*//var datos= new Array("johan", "nieto", 25, "colombia", 177); //primera forma como si fuera un nuevo objeto de la clase array
//var datos= ["johan", "nieto", 25, "colombia", 177];//segunda forma mas rapida con []

var datos= [];
datos[0]= "johan";
datos[1]= "nieto";
datos[2]= 25;

datos[4]= "177";
datos["pokemon"]= "pikachu";//array asociativo, en vez de indice numerico tiene texto
document.write(datos[2]);//25
document.write(datos[4]);//177
document.write(datos[3]);//undefined por que arriba no lo asigne
document.write(datos["pokemon"]);*///4

//unshift, push, pop, shift

/*var articulos =["libreta", "lapiz","borrador","bolso"];

document.write("<p>");

document.write(articulos.length);//4, devuelve el numero de elementos que tiene el array indiferente del indice numerico o no
//articulos.length= 2; tambien podemos truncar o cortar el array, solo dejo aqui 2 indices el 0 y el 1
//document.write(articulos[2]);aqui me dara undefined ya que con length corte los elementos

//---------------unshift,push,pop,shift----------------
document.write(articulos[0]);//libreta
articulos.unshift("tijeras");//agregar un valor al principio de la array o varios separando con (,) tambien retorna el nuevo valor de la longitud es decir 5
document.write(articulos[0]);//ahora tijeras esta en el valor 0, y libreta paso al 1 y asi sucesivamente
document.write(articulos[articulos.length-1]+"<br>");//el ultimo valor es decir la posicion 4 bolso con tijeras tenemos 5 elementos y ponemos el -1 nos muestra el indice 4
articulos.push("sacapuntas","tablero",25); //agrega al final del array, y tambien devuelve el nuevo valor de longitud, tambien separando con (,) pueden agregar varios elementos al inicio unshift o al final push
document.write(articulos[articulos.length-1]+"<br>");//25 pos 7
document.write(articulos[7]+"<br>");

articulos.pop();//remueve el ultimo elemento de un array
document.write(articulos[7]+"<br>");//undefined pop lo elemino
document.write(articulos[6]+"<br>");//tablero
document.write(articulos[0]+"<br>");//tijeras
articulos.shift();//elimina el primero elemento de un array
document.write(articulos[0]+"<br>");//libreta
document.write(articulos.length+"<br>");//6 del 0 al 5;

document.write("</p>");*///6 unshift, push, pop, shift

//arrays multidimensionales
/*var tridi=[];
tridi[0]="carro";
tridi[1]="moto";
tridi[2]="avion";
    
var bidi=[];//bidimensional


bidi[0]="pelota";
bidi[1]="perro";
bidi[2]="gato";
bidi[3]=tridi;

var uni=[];//unidimensional
uni[0]= bidi;

document.write("<p>");

document.write(uni[0]+"<br>");//pelota,perro,gato
document.write(uni[0][2]+"<br>");//gato
document.write(uni[0][3]+"<br>");//carro, moto, avion
document.write(uni[0][3][2]+"<br>");//avion
document.write(uni[0][3][1]+"<br>");//moto
document.write(uni[0][3][1][2]+"<br>");//la letra t tercera posicion indice 2 de la palabra moto, si asi es si no hay mas arrays mostrara la posicion de las letras
document.write(uni[0][2][3]+"<br>");//letra o de gato

document.write("</p>");*/
//+arrays multidimensionales
/*var am=["avion",25,true, ["perro", "gato", 25, ["pala","pico"],"conejo",false],"carro","moto",[21,31,45,[["valor2",["valor3",24]],"valor1"]]];//madre muchos arrays arrays en uno

document.write("<p>");
document.write(am[0]+"<br>");//avion
document.write(am[3]+"<br>");//segunda dimension array perro,gato,25,pala,pico,conejo,false
document.write(am[3][3]+"<br>");//tercera dimension array pala,pico
document.write(am[3][1]+"<br>");//gato
document.write(am[3][3][1]+"<br>");//pico
document.write(am[am.length-1]+"<br>");//segundo array de segunda dimension, en la ultima posicion 21,31,45,valor2,valor3,valor1
document.write(am[6][3][1]+"<br>");//valor1
document.write(am[6][3][0][0]+"<br>");//valor2
document.write(am[6][3][0][1][0]+"<br>");//valor3 en una quinta dimension o sexta
document.write("</p>");

var fruta=[];
fruta["manzana"]=[];//array asociativo, es decir la posicion "manzana" en frutas primera dimension

fruta["manzana"]["color"]= "roja";
fruta["manzana"]["forma"]= "ovalada";
fruta["manzana"]["sabor"]= "dulce";//las posiciones color forma y sabor dentro de manzana segunda dimension

fruta["manzana"]["precio"]= [];//tercera dimension
fruta["manzana"]["precio"]["dolar"]= 1;
fruta["manzana"]["precio"]["euro"]= 0.7;
fruta["manzana"]["precio"]["peso"]= 3000;
document.write("<p>");


document.write("la manzana es de color "+fruta["manzana"]["color"]+"<br>");
document.write("tiene una forma "+fruta["manzana"]["forma"]+" y un sabor "+fruta["manzana"]["sabor"]+"<br>"+ "y un precio de peso colombianos "+ fruta["manzana"]["precio"]["peso"]);//ufff
document.write("<br>"+"en dolares "+fruta["manzana"]["precio"]["dolar"]+" y en euros "+ fruta["manzana"]["precio"]["euro"]);

document.write("</p>");
//entendiiiiii*///am=arrayMultidimensional


/*-------------------POO basico---------------*/

/*var objeto1= document.getElementById("objeto1").style.width= "100px";//objeto.metodo.propiedad.subpropiedad  objeto1 es un section en html, pero aqui en js es una variable que vale el nuevo ancho de la section
var objeto2=document.getElementById("objeto2");//objeto2 aqui es toda la section en si, es decir tiene todo los datos de la sectio objeto2 del html
objeto2.style.height="100px";//como es un objeto ya puede usar propiedades sola
objeto2.style.backgroundColor="green";


var boton= document.getElementsByTagName("button")[0];//me traje el primer boton que aparece en el html y lo asigne a boton

boton.style.width="50px";
boton.style.height="50px";
boton.style.backgroundColor="red";
boton.style.border="1px solid black";//aqui cambios, como si pusieramos css desde aqui
boton.innerHTML="enviar";*/

/*-------------------/poo basico---------------*/



/*-----------------condicionales--------------*/

/*var precioHelado=5;
var miDinero=3;

if(miDinero >= precioHelado){
    alert("si puedes comprarte el helado");//ya que es false que miDinero sea mayor o igual al precioHelado, el if no funciono, es decir se salto esto y siguio el programa, si cambio el valor de miDinero y cumple, nos dara true y ejecutara este alert de adentro
}

alert("continua el flujo de ejecucion");

var num1=3;
var num2="3";

if (num1===num2){//== es menos estricto que el ===,que deben ser iguales si o si
    document.write("los 2 son iguales no importanto el tipo de dato");
}else{
    document.write("los 2 no son iguales por que tienen diferente tipo de dato");
}
    document.write("<br>");
if (num1!==num2){//niego al ===, o viendolo de otra manera, num1 es distinto distinto de num2?
    document.write("los 2 son iguales no importanto el tipo de dato");
}else{
    document.write("los 2 no son iguales por que tienen diferente tipo de dato");
}

var b=true;

if(!b){//con el ! niego al true, y se vuelve false
    alert("es ejecutado por que es true");
}else{
    alert("es ejecutado por que es false");
}

var dinero= prompt("cuentas con el dinero para comprar bebidas?");
var edad= prompt("que edad tienes?");


if(dinero>=35 && edad>=18){// AND deben ser true las 2 condiciones
    document.write("<br>"+"puedes pasar"+"<br>");
}else{
    document.write("<br>"+"NOOOOO puedes pasar");
}

if(dinero>=70 || edad>=18){//OR pueden ser cualquiera de las 2 o las 2
    document.write("<br>"+"puedes pasar"+"<br>");
}else{
    document.write("<br>"+"NOOOOO puedes pasar");
}


var a=true;
var b= false;

if(a ^ b){//XOR si o si solo uno puede ser true, el otro debe ser falso
    alert("verdadero");
}else{
    alert("falso");
    }*/

/*
var num1= prompt("primer numero");
var num2= prompt("segundo numero");


document.write("<p>");

if(!isNaN(num1) && !isNaN(num2)){//isNaN devuelve true si por ejemplo el num1 fuera un string y false si fuera de verdad un numero, isNaN= es esto un not a number? osea un "nonumero", aqui uso el ! para negarlo, num1 y num2 son numeros, y si isNaN me dara false por que son numeros, pues al negarlo con ! me dara true
    
    var operacion= prompt("tipo de operacion (+,-,*,/)");//el siguiente if es un if "anidado"
        if(operacion == "+"){//elseif condicional multiple, si se cumple alguna de las condicionales dentro de este if, saltara el codigo excepto de la primera condicion que se cumplio, si no saltara al else final
            document.write(num1+" + "+num2+" = "+(parseInt(num1)+parseInt(num2)));
        }else if(operacion == "-"){
            document.write(num1+" - "+num2+" = "+(parseInt(num1)-parseInt(num2)));
        }else if(operacion == "*"){
            document.write(num1+" * "+num2+" = "+(parseInt(num1)*parseInt(num2)));
        }else if(operacion == "/"){
            document.write(num1+" / "+num2+" = "+(parseInt(num1)/parseInt(num2)));
        }else{
            document.write("no colocaste un signo +,-,*,/");//este es el else de todos los elseif y el primer if
        }
}else{//este else es del if (!isNaN(num1) && !isNaN(num2))
    
        if(typeof(num1)=="string" || typeof(num2)=="string"){//metodo typeof evalua el tipo de dato, un if anidado dentro de un else
        document.write("no colocaste un numero, colocaste texto");
        }else{
            alert("error desconocido");
        }
}



document.write("</p>");
*/

/*-----------------/condicionales--------------*/


/*---------------switch------------------*/

/*
var num1= prompt("primer numero");
var num2= prompt("segundo numero");


document.write("<p>");

if(!isNaN(num1) && !isNaN(num2)){//isNaN devuelve true si por ejemplo el num1 fuera un string y false si fuera de verdad un numero, isNaN= es esto un not a number? osea un "nonumero", aqui uso el ! para negarlo, num1 y num2 son numeros, y si isNaN me dara false por que son numeros, pues al negarlo con ! me dara true
    
    var operacion= prompt("tipo de operacion (+,-,*,/)");//el siguiente if es un if "anidado"
        switch(operacion){//el mismo ejemplo con los multiples if, pero en una estructura llamada nintendo switch esta es la sintaxis, operacion es el valor a evaluar
            case "+"://este es el if
                document.write(num1+" + "+num2+" = "+(parseInt(num1)+parseInt(num2)));
            break;// cumple condicion y aqui salta de codigo, rompe el flujo de ejecucion y continua, los if no tienen esto, es como si lo tuvieran por defecto
            case "-"://y este como un elseif
                document.write(num1+" - "+num2+" = "+(parseInt(num1)-parseInt(num2)));
            break;
            case "*":
                document.write(num1+" * "+num2+" = "+(parseInt(num1)*parseInt(num2)));
            break;
            case "/":
                document.write(num1+" / "+num2+" = "+(parseInt(num1)/parseInt(num2)));
            break;
            default://es como el el else de todos los if
                document.write("no colocaste un signo +,-,*,/ takataka");
            break;
        }
                
                
}else{//este else es del if (!isNaN(num1) && !isNaN(num2))
    
        if(typeof(num1)=="string" || typeof(num2)=="string"){//metodo typeof evalua el tipo de dato, un if anidado dentro de un else
        document.write("no colocaste un numero, colocaste texto");
        }else{
            alert("error desconocido");
        }
}



document.write("</p>");
*/

/*---------------/switch------------------*/



