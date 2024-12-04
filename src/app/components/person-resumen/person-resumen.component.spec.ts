import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonResumenComponent } from './person-resumen.component';

describe('PersonResumenComponent', () => {
  let component: PersonResumenComponent;
  let fixture: ComponentFixture<PersonResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonResumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
