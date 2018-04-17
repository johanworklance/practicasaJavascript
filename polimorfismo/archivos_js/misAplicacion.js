

function MiAplicacion(){//clase
    
   
    
    this.iniciar= function(){//propiedad funcion que ejecuta
        this.preguntar();//esta otra propiedad funcion
    }
}


MiAplicacion.prototype.preguntar= function(){//la declare afuera de la clase con el prototype
    this.pregunta= prompt("que tipo de operacion vas a realizar? ejemplo: escribir, calculadora").toLowerCase();//se pueden declarar propiedades publicas dentro de otras propiedades publicas como este metodo preguntar
    
    switch(this.pregunta){
        case "escribir":
            this.texto= prompt("escribe el texto que deseas mostrar en el documento");
            this.polimorfismo= new Escribir(this.texto);
            break;
        case "calculadora":
            this.numero1= prompt("ingresa el primer numero");
            this.numero2= prompt("ingresa el segundo numero");
            this.calc= prompt("ingresa el tipo de operacion ejemplo: suma, resta, multi, division");
            this.polimorfismo= new Calculadora(this.numero1,this.numero2,this.calc);
    }
    
    this.polimorfismo.ejecuta();//deacuerdo a lo que suceda esta propiedad/variable sera una instancia o de la clase Escribir, o Calculadora, y ya que las 2 tienen un metodo de igual nombre, podemos usar la misma linea para cualquier caso, eso es polimorfismo, ser una instancia de distintas clases, deacuerdo a lo que programemos
}


