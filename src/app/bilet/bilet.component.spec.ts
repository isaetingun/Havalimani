import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiletComponent } from './bilet.component';

describe('BiletComponent', () => {
  let component: BiletComponent;
  let fixture: ComponentFixture<BiletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
