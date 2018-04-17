/*
//var evento: window.Event;// con este se obtiene info del evento en IE

function resalta(elEvento){
    
    var evento= elEvento || window.Event;//en todos los navegadores solo creamos un variable x y podremos obtener los valores de los eventos, pero con ese OR || nos aseguramos de que tome la forma de IE si estamos en bueno internet explorer
    
    
    var tipo= evento.type;//almacenamos la propiedad type del evento, la propiedad indica que evento es producido, pero sin el prefijo on, es decir "click" en vez de "onclik"
    
    
    switch(tipo){
            
        case "mouseover":
            this.style.borderColor= "white";
            this.style.backgroundColor="black";
        break;
        case "mouseout":
            this.style.borderColor= "black";
            this.style.backgroundColor="white";
        break;
    }
}
var section= document.getElementById("seccion");
window.onload= function(){
    section.onmouseover= resalta;//bueno al parecer los eventos pasan magicamente sus datos al parametro elEvento que coloque en la funcion resalta, asi podran llegar al switch que deacuerdo a que dato dio .type, llegara un evento u otro
    section.onmouseout= resalta;
}
*/

/*
var section= document.getElementById("seccion");

function muestraInfo(evento){
    var e= evento || window.Event;
    var informacion= "el tipo de evento: "+e.type+"<br>"+ "propiedad keycode: "+e.keyCode+ "<br>" + "propiedad charcode: "+e.charCode+ "<br>"+ "caractar pulsado: "+String.fromCharCode(e.charCode)+ "<br>";
    
    section.innerHTML+= "<p>"+ informacion+ "</p>-----------------------------------";//pues ese mas es para que concatene los 3 parrafos, que generan los 3 eventos de abajo, es decir cada evento, escribira su propio parrafo, si no le ponemos el += lo que hara es reasignar el valor en el innerHTML, y el += lo que hara es poner uno al lado del otro, lo del String.from.... es el objeto string, y tiene un metodo para pasar charCode a letras, asi nos mostrara la tecla pulsada*/
    
    /*if(e.altKey){//las alt, control, y shift devuelven true cuando son pulsadas
        alert("tecla alt fue pulsada");
    }else if(e.ctrlKey){
        alert("tecla control fue pulsada");
    }else if(e.shiftKey){
        alert("tecla shift fue pulsada");
    }
    
    if(e.ctrlKey && e.charCode===115){
        //guardar contenido, es decir estos datos de teclas pulsadas servirian para hacer atajos del teclado
    }
    
}


window.onload=function(){
    document.onkeyup= muestraInfo;//soltar la tecla
    
    document.onkeypress= muestraInfo;//solo teclearla
    document.onkeydown= muestraInfo;//mantener la tecla presionada
    
}
*/

var seccion= document.getElementById("seccion");

function muestraInfo(elEvento){
    
    var e= elEvento || window.Event;
    
    
    var ie= navigator.userAgent.toLocaleLowerCase().indexOf('msie')!=-1;//mamadita para saber si estamos en internet explorer, si estamos en ie devolvera true
    var coordenadaX;
    var coordenadaY;
    if(ie){
        coordenadaX= e.clientX + document.body.scrollLeft;
        coordenadaY= e.clientY+ document.body.scrollTop;
    }
    else{
        coordenadaX= e.pageX;//posicion en x con respecto a la ventar + el scroll
        coordenadaY= e.pageY;
    }
    seccion.innerHTML+= "<p>has pulsado el raton en la posicion: "+coordenadaX+" en X y "+coordenadaY+" en Y</p>";
}

document.onclick= muestraInfo;