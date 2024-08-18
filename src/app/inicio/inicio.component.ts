import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InicioComponent implements OnInit {
  sidebarVisible = false;
  showCatalogoProductosSubMenu = false;
  images: any[] = [];
  responsiveOptions: any[] = [];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];

    this.images = [
      { itemImageSrc: 'assets/images/pigmentos.png', thumbnailImageSrc: 'assets/images/pigmentos_thumb.png', alt: 'Pigmentos', title: 'Pigmentos' },
      { itemImageSrc: 'assets/images/herramientas.png', thumbnailImageSrc: 'assets/images/herramientas_thumb.png', alt: 'Herramientas', title: 'Herramientas' },
      { itemImageSrc: 'assets/images/lapices.png', thumbnailImageSrc: 'assets/images/lapices_thumb.png', alt: 'Lápices de Cerámica', title: 'Lápices de Cerámica' }
    ];
  }

  toggleCatalogoProductosSubMenu() {
    this.showCatalogoProductosSubMenu = !this.showCatalogoProductosSubMenu;
    console.log('showCatalogoProductosSubMenu:', this.showCatalogoProductosSubMenu);
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    console.log('sidebarVisible:', this.sidebarVisible);
  }
}
