import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryDetailPageComponent } from './brewery-detail-page.component';

describe('BreweryDetailPageComponent', () => {
  let component: BreweryDetailPageComponent;
  let fixture: ComponentFixture<BreweryDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreweryDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
