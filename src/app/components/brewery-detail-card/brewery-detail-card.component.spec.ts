import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryDetailCardComponent } from './brewery-detail-card.component';

describe('BreweryDetailCardComponent', () => {
  let component: BreweryDetailCardComponent;
  let fixture: ComponentFixture<BreweryDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryDetailCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreweryDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
