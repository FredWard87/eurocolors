import { Component } from '@angular/core';

@Component({
  selector: 'app-colores-pasta',
  templateUrl: './colores-pasta.component.html',
  styleUrls: ['./colores-pasta.component.css'] // Corregido a styleUrls
})
export class ColoresPastaComponent {
  productosColoresPasta = [
    { itemImageSrc: 'assets/images/pasta1.png', alt: 'CPDNA621', title: 'Marrón Anaranjado' },
    { itemImageSrc: 'assets/images/pasta2.png', alt: 'CPAZ211', title: 'Azul' },
      { itemImageSrc: 'assets/images/pasta3.png', alt: 'CPDM512', title: 'Café' },
      { itemImageSrc: 'assets/images/pasta4.png', alt: 'CPDMA534', title: 'Negro grisáceo' },
      { itemImageSrc: 'assets/images/pasta5.png', alt: 'CPDNE683', title: 'Negro' }
    ];
    

  filteredProductosColoresPasta = [...this.productosColoresPasta];

  searchProduct(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Asegura que event.target es un HTMLInputElement

    if (inputElement && inputElement.value !== null) { // Comprueba que inputElement no es null
      const searchText = inputElement.value.toLowerCase(); // Convierte a minúsculas

      this.filteredProductosColoresPasta = this.productosColoresPasta.filter(producto =>
        producto.title.toLowerCase().includes(searchText) ||
        producto.alt.toLowerCase().includes(searchText)
      );
    }
  }
}
