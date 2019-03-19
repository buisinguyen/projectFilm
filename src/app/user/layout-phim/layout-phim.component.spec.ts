import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPhimComponent } from './layout-phim.component';

describe('LayoutPhimComponent', () => {
  let component: LayoutPhimComponent;
  let fixture: ComponentFixture<LayoutPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
