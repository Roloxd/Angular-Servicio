import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionServiceService {
  //variable que contendrá el text en los textareas
  mensaje: string; 
  //La variable Subject, te permite enviar mensajes a multiples observers. 
  //Varios componentes se suscribirán a este subject y así recibirán todos el mismo mensaje
  private enviarMensajeSubject = new Subject<string>(); //
  //Variable auxiliar para simplificar la sintaxis, para que los componentes se suscriban al Subject
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
 
  //Función para enviar un mensaje a todos los componentes suscritos al Subject con enviarMensajeSubject y almacenamos el valor del textarea en mensaje
  enviarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
}
