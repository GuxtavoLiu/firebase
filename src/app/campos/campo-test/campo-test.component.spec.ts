import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoTestComponent } from './campo-test.component';

describe('CampoTestComponent', () => {
  let component: CampoTestComponent;
  let fixture: ComponentFixture<CampoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
