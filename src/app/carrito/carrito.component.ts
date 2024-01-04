import { Component } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { VentasService } from '../services/ventas.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(private carritoService: CarritoService, private router:Router,private Auth:AuthService, private ventasService:VentasService) {}
    
  carritos: any;
  users:any;
  ventas:any;

  
  showAlert: boolean = false;

  ngOnInit():void{
    this.showCarritos();

    
    const token = localStorage.getItem('token'); 
    console.log('Token JWT:', token);// Obtener el token del almacenamiento
    if (token) {
      this.users = this.Auth.decodeToken(token);
    }
  }

  showCarritos(){
    this.carritos = this.carritoService.listCarrito().subscribe(carrito=>{
      this.carritos = carrito;
      console.log(this.carritos);
    });
  }

  deleteArticle(id_carrito: any) {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas borrar este producto?');
  
    if (confirmDelete) {
      this.carritoService.deleteServicio(id_carrito).subscribe(res => {
        this.carritos = this.carritos.filter((a: any) => a.id_carrito !== id_carrito);
      });
      this.router.navigateByUrl('/carrito');
    }
  }
  
  deleteComprar(id_carrito: any) {

    this.carritoService.deleteServicio(id_carrito).subscribe(res => {
      this.carritos = this.carritos.filter((a: any) => a.id_carrito !== id_carrito)
    }
    )
}


  add(sub:string,id_servicio:string,id_carrito:string,nombre_servicio:string,precio_servicio:string){
    this.ventas={

     'id_cliente': sub,
     'id_servicio': id_servicio,
     'nombre_servicio': nombre_servicio,
     'precio_servicio': precio_servicio,

     
    };
    this.ventasService.addVenta(this.ventas as any).subscribe(venta=>{
      this.ventas=venta
      
    });
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false; // Ocultar la alerta después de 2 segundos
    }, 2000);
    this.deleteComprar(id_carrito);
  }
    

}
