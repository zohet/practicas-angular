import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  tipoComision = ['COMISION UNIDAD', 'COMISION SEGURO', 'COMISION TRAMITES',
  'COMISION ACCESORIOS', 'COMISION EXTGARANTIA', 'COMISION TOMA', 'COMISION AVALUO',
  'COMISION LOCALIZADOR', 'COMISION ENTREGA', 'COMISION AJUSTE', 'COMISION ESPECIAL',
  'COMISION AUTOFINANCIAMIENTO', 'COMISION GARANTIA', 'COMISION GERENCIA'];
  constructor() { }

  ngOnInit() {
  }

}
