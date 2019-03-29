import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinVeComponent } from './thong-tin-ve.component';

describe('ThongTinVeComponent', () => {
  let component: ThongTinVeComponent;
  let fixture: ComponentFixture<ThongTinVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
