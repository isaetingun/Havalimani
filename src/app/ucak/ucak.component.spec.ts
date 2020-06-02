import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcakComponent } from './ucak.component';

describe('UcakComponent', () => {
  let component: UcakComponent;
  let fixture: ComponentFixture<UcakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
