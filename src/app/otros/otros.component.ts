import { Component } from '@angular/core';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css'] // Corregido a styleUrls
})
export class OtrosComponent {
  productosOtros = [
    { itemImageSrc: 'assets/images/otro1.png', alt: '', title: 'Rafia calibre #2' },
    { itemImageSrc: 'assets/images/otro2.png', alt: 'EMT532', title: 'Cordón para molde de prensa' },
    { itemImageSrc: 'assets/images/otro3.png', alt: '', title: 'Rafia calibre #4' },
    { itemImageSrc: 'assets/images/otro4.png', alt: '', title: 'Lápices cerámicos' }
    // Agrega más productos según sea necesario
  ];

  filteredProductosOtros = [...this.productosOtros];

  searchProduct(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Asegura que event.target es un HTMLInputElement

    if (inputElement && inputElement.value !== null) { // Comprueba que inputElement no es null
      const searchText = inputElement.value.toLowerCase(); // Convierte a minúsculas

      this.filteredProductosOtros = this.productosOtros.filter(producto =>
        producto.title.toLowerCase().includes(searchText) ||
        producto.alt.toLowerCase().includes(searchText)
      );
    }
  }
}
