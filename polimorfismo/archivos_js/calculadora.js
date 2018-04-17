function Calculadora(num1,num2,calc){
    this.num1= parseInt(num1);
    this.num2= parseInt(num2);
    this.calc= calc;
    var calculo;//propiedad privada
    
    this.getSuma= function(){//adentro
        calculo= this.num1+this.num2;
        document.write("la suma es: "+calculo);
    }
    this.getResta= function(){
        calculo= this.num1-this.num2;
        document.write("la resta es: "+calculo);
    }
}

Calculadora.prototype.ejecuta= function(){
    this.analizador();
}

Calculadora.prototype.analizador= function(){
    switch(this.calc){
        case "suma":
            this.getSuma();
        break;
        case "resta":
            this.getResta();
        break;
        case "multi":
            this.getMulti();
        break;
        case "division":
            this.getDivi();
        break;
    }
}

Calculadora.prototype.getMulti= function(){//afuera
        calculo= this.num1*this.num2;
        document.write("la multiplicacion es: "+calculo);
}

Calculadora.prototype.getDivi= function(){
        calculo= this.num1/this.num2;
        document.write("la division es: "+calculo);
}


