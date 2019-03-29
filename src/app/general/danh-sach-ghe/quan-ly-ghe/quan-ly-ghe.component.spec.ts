import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyGheComponent } from './quan-ly-ghe.component';

describe('QuanLyGheComponent', () => {
  let component: QuanLyGheComponent;
  let fixture: ComponentFixture<QuanLyGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
