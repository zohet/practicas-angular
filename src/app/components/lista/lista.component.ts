import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  //items1: Observable<items:any>;
  items:any;
  agencias = [ 'HOSAO', 'HYNAO', 'HYPEO','KIQUO', 'KISAO', 'MAACO','MACHO', 
  'MAOAO', 'NICUO', 'NIVIO', 'REQUO', 'TOQUO', 'TOSAO', 'VOGRO', 'VOVAO', 
  'FOTAO', 'FOPUO', 'FOTLO', 'FOJUO', 'KIJUO', 'PENAU', 'SUCUE', 'PENAO',
  'SUCUO'];
  
  movimientos = [
    'Fact Autofinan', 'Fact Autos Nuevos', 'Fact Sist Financ', 'Factura Lincoln',
    'Factura Lincoln L','Factura Nvo Flotilla','Intercambio MRS'];

  tipoCC = [
    'AUTOFINANCIADOS','CREDITOS PLANTA','FLOTILLAS','INTERCAMBIOS',
    'MULTIMARCA','OTRAS LINEAS','SEGYSERV','Tradicional'];

  item:any={
    nombreCliente:'', cliente: 0, agente: '', agencia: '', mov: '', movid: '', vin: '',
    nombreAgente: '', fechaVenta: '', fechaCompra: '', descripUnidad: '',
    modelo: 0, situacion: '', cc: '', venta: 0, costo: 0, rebate: 0,
    notaCredito: 0, accesoriosV: 0, incentivos: 0, accesoriosC: 0,
    gastos: 0, costoExtra: 0, participacion: 0, utilidadBruta: 0
  }

  editarItem:any = {
    nombreCliente: '',  cliente: 0, agente: '', agencia: '', mov: '', movid: '', vin: '',
    nombreAgente: '', fechaVenta: '', fechaCompra: '', descripUnidad: '',
    modelo: 0, situacion: '', cc: '', venta: 0, costo: 0, rebate: 0,
    notaCredito: 0, accesoriosV: 0, incentivos: 0, accesoriosC: 0,
    gastos: 0, costoExtra: 0, participacion: 0, utilidadBruta: 0
  }
  constructor(private conexion:ConexionService) { 
    this.conexion.listaItem().subscribe(item=>{
      this.items = item;
      console.log(this.items)
    })
  }

  ngOnInit() {
  }
  agregar(){
    this.conexion.agregarItem(this.item);
    this.item.nombreCliente = '';
    this.item.vin = '';
    this.item.cliente = 0;
    this.item.agente = '';
    this.item.nombreAgente = '';
    this.item.agencia = '';
    this.item.mov = '';
    this.item.movid = '';
    this.item.fechaVenta = '';
    this.item.fechaCompra = '';
    this.item.descripUnidad = '';
    this.item.modelo = 0;
    this.item.situacion = '';
    this.item.cc = '';
    this.item.venta = 0;
    this.item.costo = 0;
    this.item.rebate = 0;
    this.item.notaCredito = 0;
    this.item.accesoriosV = 0;
    this.item.incentivos = 0;
    this.item.accesoriosC = 0;
    this.item.gastos = 0;
    this.item.costoExtra = 0;
    this.item.participacion = 0;
    this.item.utilidadBruta = 0;
  }
  eliminar(item){
    this.conexion.eliminarItem(item);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.conexion.EditarItem(this.editarItem);
  }

}
