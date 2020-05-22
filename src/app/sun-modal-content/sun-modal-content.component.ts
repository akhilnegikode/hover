import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img src="http://pngimg.com/uploads/sun/sun_PNG13448.png" width="300" height="300">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `
})
 
export class SunModalContentComponent implements OnInit {
  title: string;
  closeBtnName: string;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
  }
}

