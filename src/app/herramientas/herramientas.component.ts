import { Component } from '@angular/core';

// Define la interfaz para los elementos de herramientas
interface Herramienta {
  itemImageSrc: string;
  alt: string;
  title: string;
  code: string;
}

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent {
  herramientasComponent: Herramienta[] = [
    { itemImageSrc: 'assets/images/herramienta1.jpg', alt: 'Herramienta 1', title: 'Herramienta para Modelado (L)', code: 'ETT03' },
      { itemImageSrc: 'assets/images/herramienta2.jpg', alt: 'Herramienta 2', title: 'Herramienta para Modelado (M)', code: 'ETT02' },
      { itemImageSrc: 'assets/images/herramienta3.jpg', alt: 'Herramienta 3', title: 'Herramienta para Modelado (S)', code: 'ETT01' },
      { itemImageSrc: 'assets/images/herramienta4.jpg', alt: 'Herramienta 4', title: 'Herramienta para Modelado (L)', code: 'ETR03' },
      { itemImageSrc: 'assets/images/herramienta5.jpg', alt: 'Herramienta 5', title: 'Herramienta para Modelado (M)', code: 'ETR02' },
      { itemImageSrc: 'assets/images/herramienta6.jpg', alt: 'Herramienta 6', title: 'Herramienta para Modelado (S)', code: 'ETR01' },
      { itemImageSrc: 'assets/images/herramienta7.jpg', alt: 'Herramienta 7', title: 'Herramienta para Modelado (M)', code: 'E0T10' },
      { itemImageSrc: 'assets/images/herramienta8.jpg', alt: 'Herramienta 8', title: 'Herramienta para Modelado (S)', code: 'E0T09' },
      { itemImageSrc: 'assets/images/herramienta9.jpg', alt: 'Herramienta 9', title: 'Herramienta para Modelado (M)', code: 'ELR05' },
      { itemImageSrc: 'assets/images/herramienta10.jpg', alt: 'Herramienta 10', title: 'Herramienta para Modelado (S)', code: 'ELR04' },
      { itemImageSrc: 'assets/images/herramienta11.jpg', alt: 'Herramienta 11', title: 'Herramienta para Modelado (L)', code: 'EGC10 '},
      { itemImageSrc: 'assets/images/herramienta12.jpg', alt: 'Herramienta 12', title: 'Herramienta para Modelado (M)', code: 'EGC9' },
      { itemImageSrc: 'assets/images/herramienta13.jpg', alt: 'Herramienta 13', title: 'Herramienta para Modelado (S)', code: 'EGC08' },
      { itemImageSrc: 'assets/images/herramienta14.jpg', alt: 'Herramienta 14', title: 'Herramienta para Modelado', code: 'ESW402' },
      { itemImageSrc: 'assets/images/herramienta15.jpg', alt: 'Herramienta 15', title: 'Herramienta para Modelado', code: 'EST10' },
      { itemImageSrc: 'assets/images/herramienta16.jpg', alt: 'Herramienta 16', title: 'Herramienta para Modelado', code: 'EG12P' },
      { itemImageSrc: 'assets/images/herramienta17.jpg', alt: 'Herramienta 17', title: 'Herramienta para Modelado', code: 'EST09' },
      { itemImageSrc: 'assets/images/herramienta18.jpg', alt: 'Herramienta 18', title: 'Set C Herramienta para Modelado', code: 'est3c' },
      { itemImageSrc: 'assets/images/herramienta19.jpg', alt: 'Herramienta 19', title: 'Set B Herramienta para Modelado', code: 'EST3C' },
      { itemImageSrc: 'assets/images/herramienta20.jpg', alt: 'Herramienta 20', title: 'Set A Herramienta para Modelado', code: 'EST3A' },
      { itemImageSrc: 'assets/images/herramienta21.jpg', alt: 'Herramienta 21', title: 'Modelador de Boquillas (M)', code: 'EMB10351' },
      { itemImageSrc: 'assets/images/herramienta22.jpg', alt: 'Herramienta 22', title: 'Set para Modelado', code: 'ES9MC '},
      { itemImageSrc: 'assets/images/herramienta23.jpg', alt: 'Herramienta 23', title: 'Set para Modelado', code: 'ES4C' },
      { itemImageSrc: 'assets/images/herramienta24.jpg', alt: 'Herramienta 24', title: 'Herramienta para Modelado', code: 'EST7P' },
      { itemImageSrc: 'assets/images/herramienta25.jpg', alt: 'Herramienta 25', title: 'Herramienta para Modelado', code: 'EST131' },
      { itemImageSrc: 'assets/images/herramienta26.jpg', alt: 'Herramienta 26', title: 'Kit para Modelado', code: 'EP10410' },
      { itemImageSrc: 'assets/images/herramienta27.jpg', alt: 'Herramienta 27', title: 'Modelador de Boquillas (M)', code: 'ELB10352' },
      { itemImageSrc: 'assets/images/herramienta28.jpg', alt: 'Herramienta 28', title: 'Acanalador', code: "" },
      { itemImageSrc: 'assets/images/herramienta29.jpg', alt: 'Herramienta 29', title: 'Set de Herramienta Coreana', code: 'EKC407' },
      { itemImageSrc: 'assets/images/herramienta30.jpg', alt: 'Herramienta 30', title: 'Cortador de Arcilla', code: 'ES10096' },
      { itemImageSrc: 'assets/images/herramienta31.jpg', alt: 'Herramienta 31', title: 'Cortador de Arcilla', code: 'ESB409' },
      { itemImageSrc: 'assets/images/herramienta32.jpg', alt: 'Herramienta 32', title: 'Removedor de Arcilla', code: 'ER10179' },
    { itemImageSrc: 'assets/images/modelador1.jpg', alt: 'Granilla 1', title: 'Kit modelador de Arcilla Flexible(M)', code: 'EFM10487' },
    { itemImageSrc: 'assets/images/modelador2.jpg', alt: 'Granilla 2', title: 'Kit Modelador de Arcilla Firme(M)', code: 'EFM10488' },
    { itemImageSrc: 'assets/images/modelador3.jpg', alt: 'Granilla 3', title: 'Kit Modelador de Arcilla Flexible(S)', code: 'EFS10485' },
    { itemImageSrc: 'assets/images/modelador4.jpg', alt: 'Granilla 4', title: 'Kit Modelador de Arcilla Firme(S)', code: 'EFS10486' },
    { itemImageSrc: 'assets/images/esculpir1.jpg', alt: 'Granilla 1', title: 'Set Herramienta para Esculpir', code: 'EW10438' },
    { itemImageSrc: 'assets/images/esculpir2.jpg', alt: 'Granilla 2', title: 'Set Herramienta para Esculpir (L)', code: 'EW10439' },
    { itemImageSrc: 'assets/images/aguja1.jpg', alt: 'Aguja 1', title: 'Aguja Acero #21', code: 'EA21G' },
    { itemImageSrc: 'assets/images/aguja2.jpg', alt: 'Aguja 2', title: 'Aguja Acero #20', code: 'EA20G' },
    { itemImageSrc: 'assets/images/aguja3.jpg', alt: 'Aguja 3', title: 'Aguja Acero #19', code: 'EA19G' },
    { itemImageSrc: 'assets/images/aguja4.jpg', alt: 'Aguja 4', title: 'Aguja Acero #18', code: 'EA18G' },
    { itemImageSrc: 'assets/images/aguja5.jpg', alt: 'Aguja 5', title: 'Aguja Acero #17', code: 'EA17G' },
    { itemImageSrc: 'assets/images/aguja6.jpg', alt: 'Aguja 6', title: 'Aguja Acero #16', code: 'EA16G' },
    { itemImageSrc: 'assets/images/aguja7.jpg', alt: 'Aguja 7', title: 'Aguja Acero #15', code: 'EA15G' },
    { itemImageSrc: 'assets/images/aguja8.jpg', alt: 'Aguja 8', title: 'Aguja Acero #14', code: 'EA14G' },
    { itemImageSrc: 'assets/images/aguja9.jpg', alt: 'Aguja 9', title: 'Aguja Plástico #14', code: 'E14G' },
    { itemImageSrc: 'assets/images/aguja10.jpg', alt: 'Aguja 10', title: 'Aguja Plástico #20', code: 'E20G' },
    { itemImageSrc: 'assets/images/aguja11.jpg', alt: 'Aguja 11', title: 'Aguja Plástico #18', code: 'E18G' },
    { itemImageSrc: 'assets/images/aguja12.jpg', alt: 'Aguja 12', title: 'Aguja Plástico #16', code: 'E16G' },
    { itemImageSrc: 'assets/images/aguja13.jpg', alt: 'Aguja 13', title: 'Aguja Punta Redonda', code: 'EAT01' },
    { itemImageSrc: 'assets/images/rib1.jpg', alt: 'Rib 1', title: 'Rib de silicón', code: 'ERS10193' },
    { itemImageSrc: 'assets/images/rib2.jpg', alt: 'Rib  2', title: 'Rib de silicón', code: 'ERS10195' },
    { itemImageSrc: 'assets/images/rib3.jpg', alt: 'Rib  3', title: 'Rib de silicón', code: 'ERS10201' },
    { itemImageSrc: 'assets/images/rib4.jpg', alt: 'Rib  4', title: 'Rib de silicón', code: 'ERS10203' },
    { itemImageSrc: 'assets/images/rib5.jpg', alt: 'Rib  5', title: 'Rib de silicón#8', code: 'ESR10200' },
    { itemImageSrc: 'assets/images/rib6.jpg', alt: 'Rib  6', title: 'Rib de silicón#6', code: 'ESR10198' },
    { itemImageSrc: 'assets/images/rib7.jpg', alt: 'Rib  7', title: 'Rib de acero#7', code: 'ESR10199' },
    { itemImageSrc: 'assets/images/rib8.jpg', alt: 'Rib  8', title: 'Rib de acero 1B', code: 'ER10270' },
    { itemImageSrc: 'assets/images/rib9.jpg', alt: 'Rib  9', title: 'Rib de acero 2A', code: 'ER10272' },
    { itemImageSrc: 'assets/images/rib10.jpg', alt: 'Rib  10', title: 'Rib de acero 2C', code: 'ER10274' },
    { itemImageSrc: 'assets/images/rib11.jpg', alt: 'Rib  11', title: 'Rib de acero 4B', code: 'ES10279' },
    { itemImageSrc: 'assets/images/rib12.jpg', alt: 'Rib  12', title: 'Rib de acero 3B', code: 'ER10276' },
    { itemImageSrc: 'assets/images/rib13.jpg', alt: 'Rib  13', title: 'Rib de acero 3C', code: 'ESR10277' },
    { itemImageSrc: 'assets/images/aplicador1.jpg', alt: 'Aplicador 1', title: 'Kit botella aplicador 1 oz', code: 'EB1OZ' },
    { itemImageSrc: 'assets/images/aplicador2.jpg', alt: 'Aplicador 2', title: 'Set aplicador de precisión 2 oz', code: 'EB2OZ' },
    { itemImageSrc: 'assets/images/aplicador3.jpg', alt: 'Aplicador 3', title: 'Set aplicador de precisión 4oz', code: 'EB4OZ' },
    { itemImageSrc: 'assets/images/aplicador4.jpg', alt: 'Aplicador 4', title: 'Set aplicador 8 oz', code: 'EB8OZ' },
    { itemImageSrc: 'assets/images/aplicador5.jpg', alt: 'Aplicador 5', title: 'Botella aplicador 8 oz', code: 'EBK8OZ' },
    { itemImageSrc: 'assets/images/aplicador6.jpg', alt: 'Aplicador 6', title: 'Set aplicador de precisión 36 pza', code: 'EBK10' },
    { itemImageSrc: 'assets/images/aplicador7.jpg', alt: 'Aplicador 7', title: 'Conector para botella aplicador 4 y 8 oz', code: 'ECB4-8OZ' },
    { itemImageSrc: 'assets/images/epa1.jpg', alt: 'Epa 1', title: 'Set persilla de presicion 1oz', code: 'EPA1OZ' },
    { itemImageSrc: 'assets/images/epa2.jpg', alt: 'Epa 2', title: 'Set perilla de precisión 3 oz', code: 'EPA3OZ' },
    { itemImageSrc: 'assets/images/epa3.jpg', alt: 'Epa 3', title: 'Adaptador de succión para perilla', code: 'EPA124' },
    { itemImageSrc: 'assets/images/sello1.jpg', alt: 'Sello 1', title: 'Set sello de letras (Mayúscula)', code: 'ESLL10297' },
    { itemImageSrc: 'assets/images/sello2.jpg', alt: 'Sello 2', title: 'Set sello de letras (MINUSCULA)', code: 'ESLM10296' },
    { itemImageSrc: 'assets/images/sello3.jpg', alt: 'Sello 3', title: 'Set sello de números', code: 'ESN10298' },
    { itemImageSrc: 'assets/images/set1.jpg', alt: 'Set 1', title: 'Ribs para decorar set A', code: 'ERA10224' },
    { itemImageSrc: 'assets/images/set2.jpg', alt: 'Set 2', title: 'Ribs para decorar set B', code: 'ERB10225' },
    { itemImageSrc: 'assets/images/set3.jpg', alt: 'Set 3', title: 'Ribs para decorar set C', code: 'ERC10226' },
  ];

  filteredHerramientas: Herramienta[] = [...this.herramientasComponent]; // Inicializa con todos los productos

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.toLowerCase();

    this.filteredHerramientas = this.herramientasComponent.filter(herramienta =>
      herramienta.title.toLowerCase().includes(searchTerm) ||
      herramienta.code.toLowerCase().includes(searchTerm)
    );
  }
}
