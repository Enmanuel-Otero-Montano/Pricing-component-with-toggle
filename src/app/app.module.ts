import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardBasicComponent } from './card-basic/card-basic.component';
import { CardMasterComponent } from './card-master/card-master.component';
import { CardProfessionalComponent } from './card-professional/card-professional.component';

@NgModule({
  declarations: [
    AppComponent,
    CardBasicComponent,
    CardMasterComponent,
    CardProfessionalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
