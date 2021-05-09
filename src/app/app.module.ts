import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { Hijo2Component } from './hijo2/hijo2.component';
import { NietoComponent } from './nieto/nieto.component';
import { Nieto2Component } from './nieto2/nieto2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';  

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    Hijo2Component,
    NietoComponent,
    Nieto2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
