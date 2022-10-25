import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPrincipalComponent } from './listado-principal.component';

describe('ListadoPrincipalComponent', () => {
  let component: ListadoPrincipalComponent;
  let fixture: ComponentFixture<ListadoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
