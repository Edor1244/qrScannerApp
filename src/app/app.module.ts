import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    QrScannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
