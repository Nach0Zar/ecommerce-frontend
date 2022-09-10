export class Articulo{
    static idCounter = 0;
    constructor(id, nombreArticulo, descripcion, precio, imgSrc, categorias, cantidad, stock){
        if (id === -1){ 
            this.id = Articulo.getIdCounter();
        } 
        else {
            this.id = id;
        }
        Articulo.idCounter++;
        this.nombreArticulo = nombreArticulo;
        this.descripcion = descripcion;
        this.precio = parseInt(precio);
        this.imgSrc = imgSrc;
        this.cantidad = cantidad;
        this.categorias = categorias;
        this.stock = stock;
    }
    static getIdCounter(){
        return Articulo.idCounter;
    }

}
export class Categoria{
    static idCounter = 0;
    constructor(idCategoria, nombreCategoria){
        if (idCategoria === -1){ 
            this.idCategoria = Categoria.getIdCounter();
            Categoria.idCounter++
        } 
        else {
            this.idCategoria = idCategoria;
        }
        this.nombreCategoria = nombreCategoria;
    }
    static getIdCounter(){
        return Categoria.idCounter;
    }
}
// export class Categories{
//     static categories = [];
//     constructor(){
//         console.log("entrada "+Categories.categories)
//         Categories.createCategories();
//         console.log("salida "+Categories.categories);
//         Categories.categories.forEach((category)=>console.log(category));
//     }
//     static getCategories = async () => {
//         const URL = "https://api.mercadolibre.com/sites/MLA/categories";
//         return await fetch(URL).then((response)=>response.json());
//     }
//     static createCategories(){
//         if (Categories.categories === []){
//             console.log("entro")
//             const promise = new Promise((resolve) => {
//                 resolve(Categories.getCategories());
//             })
//             promise.then((data)=> Categories.categories=(data)).catch((err)=>console.log(err));
//             for (var category in Categories.categories){
//                 Categories.categories.push(category);
//             }
//         }
//     }
// }