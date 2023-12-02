import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListCardComponent } from './dog-list-card.component';

describe('DogListCardComponent', () => {
  let component: DogListCardComponent;
  let fixture: ComponentFixture<DogListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogListCardComponent]
    });
    fixture = TestBed.createComponent(DogListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
