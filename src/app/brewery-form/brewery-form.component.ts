import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith, switchMap } from 'rxjs';

import { BreweryDetailCardComponent } from '../components/brewery-detail-card/brewery-detail-card.component';
import {
  BreweryApiService,
  httpReqState,
} from '../shared/api/brewery-api.service';
import { TypographyComponent } from '../shared/style/typography/typography.component';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-brewery-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BreweryDetailCardComponent,
    TypographyComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: './brewery-form.component.html',
  styleUrl: './brewery-form.component.scss',
})
export class BreweryFormComponent {
  constructor(private apiService: BreweryApiService, public router: Router) {}

  searchFieldControl = new FormControl('');
  searchState: httpReqState = { state: 'init' };

  ngOnInit() {
    this.searchFieldControl.valueChanges.subscribe((inputValue) => {
      if (!inputValue) {
        this.searchState.data = undefined;
      } else {
        this.apiService
          .autocomplete(inputValue, 4)
          .pipe(
            startWith(<httpReqState>{ state: 'loading' }),
            switchMap((res) => {
              if (!res.data) {
                return new Observable<httpReqState>().pipe(startWith(res));
              } else {
                return this.apiService.getDetailsForAll(res.data);
              }
            })
          )
          .subscribe((x) => {
            this.searchState = x;
          });
      }
    });
  }

  submit(e: any) {
    e.preventDefault();

    this.searchFieldControl.value
      ? this.apiService
          .getBreweriesByQuery(this.searchFieldControl.value)
          .pipe(startWith(<httpReqState>{ state: 'loading' }))
          .subscribe((x) => {
            this.searchState = x;
          })
      : this.apiService
          .getAllBreweries()
          .pipe(startWith(<httpReqState>{ state: 'loading' }))
          .subscribe((x) => {
            this.searchState = x;
          });
  }
}
