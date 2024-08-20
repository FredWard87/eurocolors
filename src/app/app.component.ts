import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredProductos: any[] = []; // Lista de productos filtrados
  productos: any[] = [/* Lista de productos */]; // Lista completa de productos
filteredProductosPigmentos: any;

  constructor(private router: Router) {}

  searchProduct(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredProductos = this.productos.filter(producto =>
      producto.title.toLowerCase().includes(searchTerm)
    );

    if (this.filteredProductos.length === 1) {
      const selectedProduct = this.filteredProductos[0];
      this.router.navigate(['/productos', selectedProduct.id]); // Redirige al producto seleccionado
    }
  }
}
