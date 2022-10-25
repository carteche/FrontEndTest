import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatingFilmsComponent } from './top-rating-films.component';

describe('TopRatingFilmsComponent', () => {
  let component: TopRatingFilmsComponent;
  let fixture: ComponentFixture<TopRatingFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatingFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatingFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
