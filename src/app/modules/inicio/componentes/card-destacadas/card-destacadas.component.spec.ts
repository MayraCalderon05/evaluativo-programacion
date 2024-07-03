import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestacadasComponent } from './card-destacadas.component';

describe('CardDestacadasComponent', () => {
  let component: CardDestacadasComponent;
  let fixture: ComponentFixture<CardDestacadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestacadasComponent]
    });
    fixture = TestBed.createComponent(CardDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
