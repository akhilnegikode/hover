import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunModalContentComponent } from './sun-modal-content.component';

describe('SunModalContentComponent', () => {
  let component: SunModalContentComponent;
  let fixture: ComponentFixture<SunModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
