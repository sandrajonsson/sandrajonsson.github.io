import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAreaComponent } from './result-area.component';

describe('ResultAreaComponent', () => {
  let component: ResultAreaComponent;
  let fixture: ComponentFixture<ResultAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
