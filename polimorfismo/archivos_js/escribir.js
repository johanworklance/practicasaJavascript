function Escribir(texto){
    this.texto= texto;
    
    
    this.escribe= function(){
        document.write(this.texto);
    }
    
    this.ejecuta= function(){
        this.escribe();
    }
}