import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavMenuComponent {
  sidebarVisible: boolean = false;
  showCatalogoProductosSubMenu: boolean = false;



  toggleCatalogoProductosSubMenu() {
    this.showCatalogoProductosSubMenu = !this.showCatalogoProductosSubMenu;
    console.log('showCatalogoProductosSubMenu:', this.showCatalogoProductosSubMenu);
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    console.log('sidebarVisible:', this.sidebarVisible);
  }
}
