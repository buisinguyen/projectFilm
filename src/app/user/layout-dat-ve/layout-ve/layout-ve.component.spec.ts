import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutVeComponent } from './layout-ve.component';

describe('LayoutVeComponent', () => {
  let component: LayoutVeComponent;
  let fixture: ComponentFixture<LayoutVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
