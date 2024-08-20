import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  encapsulation: ViewEncapsulation.None  // Puedes cambiar a ViewEncapsulation.Emulated si es necesario
})
export class NavMenuComponent {
  sidebarVisible: boolean = false;
  showCatalogoProductosSubMenu: boolean = false;

  toggleCatalogoProductosSubMenu(event: Event) {
    event.preventDefault();  // Previene la acción por defecto del enlace
    this.showCatalogoProductosSubMenu = !this.showCatalogoProductosSubMenu;
    console.log('showCatalogoProductosSubMenu:', this.showCatalogoProductosSubMenu);
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    console.log('sidebarVisible:', this.sidebarVisible);
  }
}
