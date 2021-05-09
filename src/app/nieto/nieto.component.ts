import { Component, OnInit } from '@angular/core';
import { ComunicacionServiceService } from 'src/app/comunicacion-service.service';
@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

 //Array para almacenar todas las fuentes a elegir
 fuentes:string[] = ["Brush Script MT",
 "Times New Roman",
 "Papyrus",
 "Lucida Handwriting",
 "Courier New",
 "Monaco",
 "OCR A Std"
 ];
//Array para almacenar todos los colores a elegir
colores:string[] = [
   "Blue",
   "Yellow",
   "Red",
   "Black",
   "Pink"
  ];                  

mensaje: string;
//variable fuente donde se guardara el tipo de fuente escogido
fuente: string;
//variable color donde se guardara el color escogido
color: string ;
constructor(private servicioComunicacion: ComunicacionServiceService) { }

ngOnInit(): void {
//Esta variable es un observable que nos permite suscribirnos al servicio
//Cada vez que se ejecuta el evento del observable queremos ejecutar this.mensaje = response
//Donde el response es el texto del textarea
this.servicioComunicacion.enviarMensajeObservable.subscribe(response => {
this.mensaje = response;
});
}

//Función que se ejecuta cuando escribimos en el textarea 
cambioTexto(mensaje: string) {
this.servicioComunicacion.enviarMensaje(mensaje);
}

//Función para cambiar el tipo de fuente del textarea
cambiarFuente(value){
this.fuente = value;
}

//Función para cambiar el tipo de color del textarea
cambiarColor(value){
this.color = value;
}

}
