export class Articulo{
    static idCounter = 0;
    constructor(nombreArticulo, descripcion, precio, imgSrc, cantidad, id){
        if (id === 0){ 
            this.id = Articulo.getIdCounter();
            Articulo.idCounter++
        } 
        else {
            this.id = id;
        }
        this.nombreArticulo = nombreArticulo;
        this.descripcion = descripcion;
        this.precio = parseInt(precio);
        this.imgSrc = imgSrc;
        this.cantidad = cantidad;
        this.agregado = false;
    }
    static getIdCounter(){
        return Articulo.idCounter;
    }
}