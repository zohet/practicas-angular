import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Item { nombreCliente: string; cliente: number; agente: string; 
  agencia: string ; mov: string; movid: string; vin:string; nombreAgente: string;
  fechaVenta: string; fechaCompra: string; descripUnidad: string; modelo: number;
  situacion: string; cc: string; venta: number; costo: number; rebate: number;
  notaCredito: number; accesoriosV: number; incentivos: number; accesoriosC: number;
  gastos: number; costoExtra: number; participacion: number; utilidadBruta: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaItem(){
    return this.items;
  }
  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }

  eliminarItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }

  EditarItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
