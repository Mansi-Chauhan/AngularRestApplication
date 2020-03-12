import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiewCompComponent } from './ciew-comp.component';

describe('CiewCompComponent', () => {
  let component: CiewCompComponent;
  let fixture: ComponentFixture<CiewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
