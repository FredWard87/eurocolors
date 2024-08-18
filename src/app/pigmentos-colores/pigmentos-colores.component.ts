import { Component } from '@angular/core';

@Component({
  selector: 'app-pigmentos-colores',
  templateUrl: './pigmentos-colores.component.html',
  styleUrls: ['./pigmentos-colores.component.css'] // Corregido a styleUrls
})
export class PigmentosColoresComponent {
  productosPigmentos = [
    { itemImageSrc: 'assets/images/pigmento1.png', alt: 'CE4501', title: 'Amarillo' },
  { itemImageSrc: 'assets/images/pigmento2.png', alt: 'CE3001', title: 'Naranja' },
  { itemImageSrc: 'assets/images/pigmento3.png', alt: 'CE5527', title: 'Azul' },
  { itemImageSrc: 'assets/images/pigmento4.png', alt: 'CE8955', title: 'Café' },
  { itemImageSrc: 'assets/images/pigmento5.png', alt: 'CE8853', title: 'Café rojizo' },
  { itemImageSrc: 'assets/images/pigmento6.png', alt: 'CE5208', title: 'Negro' },
  { itemImageSrc: 'assets/images/pigmento7.png', alt: 'CE6344', title: 'Rosa' },
  { itemImageSrc: 'assets/images/pigmento8.png', alt: 'CE5229', title: 'Negro grisáceo' },
  { itemImageSrc: 'assets/images/pigmento9.png', alt: 'CE7030', title: 'Jade' },
  { itemImageSrc: 'assets/images/pigmento10.png', alt: 'CE5641', title: 'Rex' },
  { itemImageSrc: 'assets/images/pigmento11.png', alt: 'CE7122', title: 'Hoja' },
  { itemImageSrc: 'assets/images/pigmento12.png', alt: 'CE4627', title: 'Lima' },
  { itemImageSrc: 'assets/images/pigmento13.png', alt: 'CE6066', title: 'Rojo intenso' },
  { itemImageSrc: 'assets/images/pigmento14.png', alt: 'CE8871', title: 'Marrón anaranjado' },
  { itemImageSrc: 'assets/images/pigmento15.png', alt: 'CE6356', title: 'Rosa' },
  { itemImageSrc: 'assets/images/pigmento16.png', alt: 'CE6440', title: 'Nacar' },
  { itemImageSrc: 'assets/images/pigmento17.png', alt: 'CE8725', title: 'Naranja A.' },
  { itemImageSrc: 'assets/images/pigmento18.png', alt: 'CE5711', title: 'Cobalto' },
  { itemImageSrc: 'assets/images/pigmento19.png', alt: 'CE4544', title: 'Amarillo H.' },
  { itemImageSrc: 'assets/images/pigmento20.png', alt: 'CE5602', title: 'Cobalto' },
  { itemImageSrc: 'assets/images/pigmento21.png', alt: 'CE0001', title: 'Blanco' },
  { itemImageSrc: 'assets/images/pigmento22.png', alt: 'CE6515', title: 'Morado' },
  { itemImageSrc: 'assets/images/pigmento23.png', alt: 'CE3000', title: 'Tangenina' },
  { itemImageSrc: 'assets/images/pigmento24.png', alt: 'CE6070', title: 'Rojo' },
  { itemImageSrc: 'assets/images/pigmento25.png', alt: 'CE5159', title: 'Gris' },
  { itemImageSrc: 'assets/images/pigmento26.png', alt: 'CE7301', title: 'Menta' },
  { itemImageSrc: 'assets/images/pigmento27.png', alt: 'CE6602', title: 'Marrón' },
  { itemImageSrc: 'assets/images/pigmento28.png', alt: 'CE7521', title: 'Verde mayo' },
  { itemImageSrc: 'assets/images/pigmento29.png', alt: 'CE6540', title: 'Cereza' },
  { itemImageSrc: 'assets/images/pigmento30.png', alt: 'CE8515', title: 'Lila' },
  { itemImageSrc: 'assets/images/pigmento31.png', alt: 'CE7260', title: 'Verde esmeralda' },
  { itemImageSrc: 'assets/images/pigmento32.png', alt: 'CE4563', title: 'Amarillo H.' },
  { itemImageSrc: 'assets/images/pigmento33.png', alt: 'CE8841', title: 'Café' }
    // Agrega más productos según sea necesario
  ];

  filteredProductosPigmentos = [...this.productosPigmentos];

  searchProduct(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Asegura que event.target es un HTMLInputElement
    
    if (inputElement && inputElement.value !== null) { // Comprueba que inputElement no es null
      const searchText = inputElement.value.toLowerCase(); // Acceso seguro a 'value'

      this.filteredProductosPigmentos = this.productosPigmentos.filter(producto =>
        producto.title.toLowerCase().includes(searchText) ||
        producto.alt.toLowerCase().includes(searchText)
      );
    }
  }
}
