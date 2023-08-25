import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaEstruturaisComponent } from './diretiva-estruturais.component';

describe('DiretivaEstruturaisComponent', () => {
  let component: DiretivaEstruturaisComponent;
  let fixture: ComponentFixture<DiretivaEstruturaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaEstruturaisComponent]
    });
    fixture = TestBed.createComponent(DiretivaEstruturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
