import { Component, inject, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCountries } from './store/countries.actions';
import { selectCountries, selectLoading } from './store/countries.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'country-api';
  private store = inject(Store);

  countries$ = this.store.select(selectCountries);
  loading$ = this.store.select(selectLoading);

  ngOnInit() {
    // Dispatch an action to load countries when the app initializes

    this.store.dispatch(loadCountries());
  }
}
