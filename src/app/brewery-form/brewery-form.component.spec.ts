import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryFormComponent } from './brewery-form.component';

describe('BreweryFormComponent', () => {
  let component: BreweryFormComponent;
  let fixture: ComponentFixture<BreweryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreweryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
