import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-esmaltes',
  templateUrl: './esmaltes.component.html',
  styleUrls: ['./esmaltes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EsmaltesComponent {
  productosEsmaltes = [
    { itemImageSrc: 'assets/images/esmalte1.png', alt: 'MX400P0L', title: 'Esmalte transparente' },
    { itemImageSrc: 'assets/images/esmalte2.png', alt: 'MX4036070', title: 'Esmalte transparente' },
    { itemImageSrc: 'assets/images/esmalte3.png', alt: 'ES174441', title: 'Esmalte blanco' },
    { itemImageSrc: 'assets/images/esmalte4.png', alt: 'EMT003', title: 'Esmalte transparente mate' }
  ];

  filteredProductosEsmaltes = [...this.productosEsmaltes];

  searchProduct(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.value !== null) {
      const searchText = inputElement.value.toLowerCase();

      this.filteredProductosEsmaltes = this.productosEsmaltes.filter(producto =>
        producto.title.toLowerCase().includes(searchText) ||
        producto.alt.toLowerCase().includes(searchText)
      );
    }
  }
}
