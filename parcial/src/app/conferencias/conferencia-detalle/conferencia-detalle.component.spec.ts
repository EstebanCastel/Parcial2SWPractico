import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenciaDetalleComponent } from './conferencia-detalle.component';

describe('ConferenciaDetalleComponent', () => {
  let component: ConferenciaDetalleComponent;
  let fixture: ComponentFixture<ConferenciaDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConferenciaDetalleComponent]
    });
    fixture = TestBed.createComponent(ConferenciaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
