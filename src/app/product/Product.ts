export class Product {
    uid: number;
    nombre: string;
    precio: number;
    marca: string;
    descripcion: string;
    existencia: number;
    constructor(uid: number, nombre: string, precio: number, marca: string, descripcion: string, existencia: number) {
        this.uid = uid;
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.descripcion = descripcion;
        this.existencia = existencia;
    }
}