import { Component, inject, OnInit } from '@angular/core';
import { loadCountry } from '../../store/countries/countries.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectCountry } from '../../store/countries/countries.selector';
import { AsyncPipe } from '@angular/common';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-country-details',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
})
export class CountryDetailsComponent implements OnInit {
  private store = inject(Store);
  id = '';
  country$ = this.store.select(selectCountry);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('CountryDetailsComponent initialized');
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      this.store.dispatch(loadCountry({ id: this.id }));
    });
  }
}
