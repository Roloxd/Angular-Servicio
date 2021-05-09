# Communication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


---------------------------------------------------------------------

El código está debidamente comentado, pero comentaré en lineas generales lo que he hecho. Primero he seguido el turorial del video para crear el servicio. El servicio tienes dos variables, Subject y Observable. La variable Subject nos permite enviar mensajes a múltiples observers. Mediante la variable Observable, los componentes se pueden suscribir al servicio. La función enviarMensaje(mensaje:string) es la que se encargará de enviar mensaje a todos los componentes suscritos al servicio.

En cada componente realizamos una inyección mediante -> constructor(private servicioComunicacion: ComunicacionServiceService) { } En el ngInit nos suscribmos al servicio y cada vez que el servicio se ejecute el mensaje cambiará al textarea -> this.servicioComunicacion.enviarMensajeObservable.subscribe(response => { this.mensaje = response; });

Los componentes tendrán dos arrays de Strings. De las variables fuente y color. Estas variables fuente y color cambiarán el texto dentro del textarea al añadir [style.font-family]="fuente" [style.color]="color" en el textarea.

Mediante un selector , que se encontrará encima de los textarea, el usuario podrá escoger el color y la fuente. Elige una fuente <mat-select name="miselect" [(ngModel)]="fuente"> <mat-option *ngFor="let font of fuentes" [value]="font" ng-change="cambiarFuente(font)"> {{font}}

Como podemos ver en este caso hay un ngModel para poderle hacer set a la variable del Component. Un ngFor para ir recorriendo el array con los distintos valores de, en este caso, la fuente. El value es el valor que se va a ver en el select con {{ font }}. Por último el ng-Change llamará a la función para realizar el cambio de fuente cada vez que se escoja un valor.

La aplicación tendrá, como en el video, 1 padre, 2 hijos y 2 nietos. El cambio de fuente, color y los mensajes del servicio se realizarán en los nietos. Los cuales he denominado como nieto y nieto2. El servicio se encontrará dentro de app.