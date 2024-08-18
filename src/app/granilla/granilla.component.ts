import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-granilla',
  templateUrl: './granilla.component.html',
  styleUrls: ['./granilla.component.css'], // Cambiado a styleUrls para que coincida con el formato correcto
  encapsulation: ViewEncapsulation.None
})
export class GranillaComponent {
  productosGranilla = [
    { itemImageSrc: 'assets/images/granilla1.png', alt: 'EG600-70', title: 'Azul' },
    { itemImageSrc: 'assets/images/granilla2.png', alt: 'FA700-P1', title: 'Negro' },
    { itemImageSrc: 'assets/images/granilla3.png', alt: 'EG9002-70', title: 'Amarillo' },
    { itemImageSrc: 'assets/images/granilla4.png', alt: 'EG200-76', title: 'Café' }
  ];

  filteredProductosGranilla = [...this.productosGranilla];

  searchProduct(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.value !== null) {
      const searchText = inputElement.value.toLowerCase();

      this.filteredProductosGranilla = this.productosGranilla.filter(producto =>
        producto.title.toLowerCase().includes(searchText) ||
        producto.alt.toLowerCase().includes(searchText)
      );
    }
  }
}

