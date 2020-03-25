import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	productos: Product[];
	inputValue = '';
	resultado = [];
	existencia = false;
	resaltar = false;
	ordenar = false;

	buscar() {
		// console.log('buscar');
		if(this.existencia)
			this.resultado = this.productos.slice().filter(p => (p.existencia > 0)
				&& (p.nombre.toUpperCase().includes(this.inputValue.toUpperCase())
					|| p.descripcion.toUpperCase().includes(this.inputValue.toUpperCase())));
		else if(this.inputValue.length > 0)
			this.resultado = this.productos.slice().filter(p => p.nombre.toUpperCase().includes(this.inputValue.toUpperCase())
				|| p.descripcion.toUpperCase().includes(this.inputValue.toUpperCase()));
		if(this.ordenar) {
			this.ordenar = !this.ordenar;
			this.ordenarPrecio();
		}
	}
	conExistencia() {
		// console.log('existencia');
		this.existencia = !this.existencia;
		this.buscar();
	}
	ordenarPrecio() {
		// console.log('ordenar');
		this.ordenar = !this.ordenar;
		console.log(this.ordenar);
		if(!this.ordenar) {
			this.resultado = this.productos.slice();
			this.buscar();
		}
		else this.resultado = this.resultado.sort((a, b) => a.precio - b.precio);
	}
	
	resaltarProductos() {
		// console.log('resaltar');
		this.resaltar = !this.resaltar;
	}
	constructor() {
		this.productos = [
			new Product(12,'Smartphone', 12018.5,'LG','Quadcore 3GHZ', 5),
			new Product(123,'Smartwatch', 4999.9, 'Sony', '3GB Ram',0 ),
			new Product(34,'SmartTV', 8999.9, 'Sony', '52 pulgadas, Conexión wifi', 3 )];
			this.resultado = this.productos.slice();
	}
	
	ngOnInit(): void {
	}
}
