import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { BiletComponent } from './bilet/bilet.component';
import { UcakComponent } from './ucak/ucak.component';

@NgModule({
  declarations: [
    AppComponent,
    KullaniciComponent,
    BiletComponent,
    UcakComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:"apiUrl", useValue:"http://localhost:49537/api"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
