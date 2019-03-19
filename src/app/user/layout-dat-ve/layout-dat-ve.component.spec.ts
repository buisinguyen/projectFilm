import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDatVeComponent } from './layout-dat-ve.component';

describe('LayoutDatVeComponent', () => {
  let component: LayoutDatVeComponent;
  let fixture: ComponentFixture<LayoutDatVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDatVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDatVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
