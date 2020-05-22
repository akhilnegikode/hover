import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// Import the library
import { NgxImageZoomModule } from 'ngx-image-zoom';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageMapComponent } from './image-map/image-map.component';
import { SunModalContentComponent } from './sun-modal-content/sun-modal-content.component';
import { EarthModalContentComponent } from './earth-modal-content/earth-modal-content.component';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, ImageMapComponent, SunModalContentComponent, EarthModalContentComponent
  ],
  imports: [
    BrowserModule,
    NgxImageZoomModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
