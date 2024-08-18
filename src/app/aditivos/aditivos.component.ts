import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aditivos',
  templateUrl: './aditivos.component.html',
  styleUrls: ['./aditivos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AditivosComponent {
  productosAditivos = [
    { itemImageSrc: 'assets/images/aditivo1.png', alt: 'Separador de color', title: 'Separador de color' },
    { itemImageSrc: 'assets/images/aditivo2.png', alt: 'Suspensivante', title: 'Suspensivante' },
    { itemImageSrc: 'assets/images/aditivo3.png', alt: 'Separador de color serigrafia', title: 'Separador de color serigrafia' },
    { itemImageSrc: 'assets/images/aditivo4.png', alt: 'Goma para granilla', title: 'Goma para granilla' },
    { itemImageSrc: 'assets/images/aditivo5.png', alt: 'Goma', title: 'Goma' },
    { itemImageSrc: 'assets/images/aditivo6.png', alt: 'Silicato de sodio', title: 'Silicato de sodio' },
    { itemImageSrc: 'assets/images/aditivo7.png', alt: 'Adherente', title: 'Adherente' }
  ];

  filteredProductosAditivos = [...this.productosAditivos];

  searchProduct(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.value !== null) {
      const searchText = inputElement.value.toLowerCase();

      this.filteredProductosAditivos = this.productosAditivos.filter(producto =>
        producto.title.toLowerCase().includes(searchText) ||
        producto.alt.toLowerCase().includes(searchText)
      );
    }
  }
}
