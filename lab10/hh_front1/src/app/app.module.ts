import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import {routes} from "./app.routes";

import { CompanyComponent } from './company/company.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    CompanyComponent,
    AppComponent
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
