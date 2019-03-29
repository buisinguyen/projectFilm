import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyVeComponent } from './quan-ly-ve.component';

describe('QuanLyVeComponent', () => {
  let component: QuanLyVeComponent;
  let fixture: ComponentFixture<QuanLyVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
