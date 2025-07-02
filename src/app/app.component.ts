import { Component, inject, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCountries } from './store/countries/countries.actions';
import {
  selectCountries,
  selectLoading,
} from './store/countries/countries.selector';
import { selectTheme } from './store/theme/theme.selector';
import { AsyncPipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'country-api';
  themeToggle$!: Observable<boolean>;
  private store = inject(Store);

  constructor() {
    this.themeToggle$ = this.store.select(selectTheme);
    this.themeToggle$.subscribe((isDarkMode) => {
      document.body.classList.toggle('dark-mode', isDarkMode);
    });
  }

  countries$ = this.store.select(selectCountries);
  loading$ = this.store.select(selectLoading);

  ngOnInit() {
    this.store.dispatch(loadCountries());
  }
}
