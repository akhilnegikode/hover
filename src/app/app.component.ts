import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ImageMapCoordinate } from './image-map.corrdinate';
import { SunModalContentComponent } from './sun-modal-content/sun-modal-content.component';
import { EarthModalContentComponent } from './earth-modal-content/earth-modal-content.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  image: string = 'https://image.shutterstock.com/image-vector/solar-system-sun-planets-vector-260nw-751091653.jpg'
  coordinates: ImageMapCoordinate[] = [
    {
      name: 'Sun',
      x: 0,
      y: 159,
      width: 95,
      height: 100
    },
    {
      name: 'Earth',
      x: 140,
      y: 130,
      width: 95,
      height: 100
    },
    {
      name: 'Jupiter',
      x: 180,
      y: 40,
      width: 95,
      height: 100
    }
  ]

  getClick(coordinate: any) {
    console.log(`Clicked on ${coordinate.name} ${coordinate.x}`)
    if (coordinate.name == 'Sun') {
      const initialState = {
        title: 'Modal with component'
      };
      this.modalRef = this.modalService.show(SunModalContentComponent, { initialState });
      this.modalRef.content.closeBtnName = 'Back';
    }
    if (coordinate.name == 'Earth') {
      const initialState = {
        title: 'Modal with component'
      };
      this.modalRef = this.modalService.show(EarthModalContentComponent, { initialState });
      this.modalRef.content.closeBtnName = 'Back';
    }
  }
}