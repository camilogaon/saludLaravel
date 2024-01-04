import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { VentasService } from '../services/ventas.service';


interface Venta {
  id_venta : string;
  id_cliente: string;
  id_servicio: string;
  nombre_servicio: string;
  precio_servicio:string;
}
@Component({
  selector: 'app-exel',
  templateUrl: './exel.component.html',
  styleUrls: ['./exel.component.css']
})
export class ExelComponent {

  constructor(private ventasService:VentasService) { }

  exportToExcel(): void {
    this.ventasService.listVentas().subscribe(ventas => {
      const dataToExport = ventas.map((venta: Venta) => {
        return {
          'id_venta': venta.id_venta,
          'id_cliente': venta.id_cliente,
          'id_servicio': venta.id_servicio,
          'nombre_servicio':venta.nombre_servicio,
          'precio_servicio':venta.precio_servicio
        };
      });

      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
      const workbook: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Ventas');

      XLSX.writeFile(workbook, 'ventas.xlsx');
    });
  }
}
