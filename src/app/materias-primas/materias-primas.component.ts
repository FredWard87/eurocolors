import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-materias-primas',
  templateUrl: './materias-primas.component.html',
  styleUrls: ['./materias-primas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MateriasPrimasComponent {
  productosMateriasPrimas = [
    { itemImageSrc: 'assets/images/materia1.png', alt: 'PO102', title: 'Felspato' },
    { itemImageSrc: 'assets/images/materia2.png', alt: 'PO102', title: 'Sílice' },
    { itemImageSrc: 'assets/images/materia3.png', alt: 'P0040', title: 'Carbonato de calcio' },
    { itemImageSrc: 'assets/images/materia4.png', alt: 'PO103', title: 'Pacificante' },
    { itemImageSrc: 'assets/images/materia5.png', alt: '', title: 'Alúmina' },
    { itemImageSrc: 'assets/images/materia6.png', alt: 'PO116', title: '' },
    { itemImageSrc: 'assets/images/materia7.png', alt: 'PO161', title: '' }
  ];

  filteredProductosMateriasPrimas = [...this.productosMateriasPrimas];

  searchProduct(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.value !== null) {
      const searchText = inputElement.value.toLowerCase();

      this.filteredProductosMateriasPrimas = this.productosMateriasPrimas.filter(producto =>
        producto.title.toLowerCase().includes(searchText) ||
        producto.alt.toLowerCase().includes(searchText)
      );
    }
  }
}

