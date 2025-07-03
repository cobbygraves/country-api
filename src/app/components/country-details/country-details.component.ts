import { Component, inject, OnInit } from '@angular/core';
import { loadCountry } from '../../store/countries/countries.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectCountry } from '../../store/countries/countries.selector';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { Country } from '../../models/country';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-details',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css',
})
export class CountryDetailsComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  id = '';
  country$ = this.store.select(selectCountry);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      this.store.dispatch(loadCountry({ id: this.id }));
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  showBorderCountryDetails(border: string) {
    this.router.navigate(['/country', border]);
  }
}
