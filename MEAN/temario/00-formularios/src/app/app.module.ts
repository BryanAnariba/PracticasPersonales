import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariosunoComponent } from './components/formulariosuno/formulariosuno.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormulariosunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
