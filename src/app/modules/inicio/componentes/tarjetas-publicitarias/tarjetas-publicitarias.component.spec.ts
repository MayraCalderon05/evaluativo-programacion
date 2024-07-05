import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasPublicitariasComponent } from './tarjetas-publicitarias.component';

describe('TarjetasPublicitariasComponent', () => {
  let component: TarjetasPublicitariasComponent;
  let fixture: ComponentFixture<TarjetasPublicitariasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasPublicitariasComponent]
    });
    fixture = TestBed.createComponent(TarjetasPublicitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
