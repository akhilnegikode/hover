import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthModalContentComponent } from './earth-modal-content.component';

describe('EarthModalContentComponent', () => {
  let component: EarthModalContentComponent;
  let fixture: ComponentFixture<EarthModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
