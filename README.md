## Antes de arrancar

npm install --save-dev @angular-devkit/build-angular

## Una vez instlado el paquete anterior

ng serve

## Pequeña Memoria

El código está debidamente comentado, pero comentaré en lineas generales lo que he hecho. Primero he seguido el turorial del video para crear el servicio. El servicio tienes dos variables, Subject y Observable. La variable Subject nos permite enviar mensajes a múltiples observers. Mediante la variable Observable, los componentes se pueden suscribir al servicio. La función enviarMensaje(mensaje:string) es la que se encargará de enviar mensaje a todos los componentes suscritos al servicio.

En cada componente realizamos una inyección mediante -> constructor(private servicioComunicacion: ComunicacionServiceService) { } En el ngInit nos suscribmos al servicio y cada vez que el servicio se ejecute el mensaje cambiará al textarea -> this.servicioComunicacion.enviarMensajeObservable.subscribe(response => { this.mensaje = response; });

Los componentes tendrán dos arrays de Strings. De las variables fuente y color. Estas variables fuente y color cambiarán el texto dentro del textarea al añadir [style.font-family]="fuente" [style.color]="color" en el textarea.

Mediante un selector , que se encontrará encima de los textarea, el usuario podrá escoger el color y la fuente. Elige una fuente <mat-select name="miselect" [(ngModel)]="fuente"> <mat-option *ngFor="let font of fuentes" [value]="font" ng-change="cambiarFuente(font)"> {{font}}

Como podemos ver en este caso hay un ngModel para poderle hacer set a la variable del Component. Un ngFor para ir recorriendo el array con los distintos valores de, en este caso, la fuente. El value es el valor que se va a ver en el select con {{ font }}. Por último el ng-Change llamará a la función para realizar el cambio de fuente cada vez que se escoja un valor.

La aplicación tendrá, como en el video, 1 padre, 2 hijos y 2 nietos. El cambio de fuente, color y los mensajes del servicio se realizarán en los nietos. Los cuales he denominado como nieto y nieto2. El servicio se encontrará dentro de app.
