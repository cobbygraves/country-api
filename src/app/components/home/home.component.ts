import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCountries } from '../../store/countries/countries.actions';
import {
  countries,
  loading,
  filteredCountries,
} from '../../store/countries/countries.selector';
import { selectTheme } from '../../store/theme/theme.selector';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ErrorService } from '../../services/error.service';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    CountryCardComponent,
    SearchBarComponent,
    ProgressSpinnerModule,
    ErrorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  themeToggle$!: Observable<boolean>;
  private store = inject(Store);
  errorService = inject(ErrorService);

  countries$ = this.store.select(filteredCountries);
  loading$ = this.store.select(loading);

  constructor() {
    this.themeToggle$ = this.store.select(selectTheme);
    this.themeToggle$.subscribe((isDarkMode) => {
      document.body.classList.toggle('dark-mode', isDarkMode);
    });
  }

  ngOnInit() {
    this.store.dispatch(loadCountries());
  }
}
