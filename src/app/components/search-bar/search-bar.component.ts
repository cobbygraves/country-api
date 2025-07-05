import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { setSearchQuery } from '../../store/user/user.actions';
import { setFilterRegion } from '../../store/countries/countries.actions';
import { filterRegion } from '../../store/countries/countries.selector';
import { CountryService } from '../../services/country.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  imports: [FormsModule],
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit, OnDestroy {
  selectedRegion: string = '';
  private destroy$ = new Subject<void>();
  private inputSubject = new Subject<string>();

  constructor(private store: Store, private countryservice: CountryService) {}

  ngOnInit(): void {
    // Subscribe to selectedRegion from the store
    this.store
      .select(filterRegion)
      .pipe(takeUntil(this.destroy$))
      .subscribe((region) => {
        this.selectedRegion = region || '';
      });

    this.inputSubject
      .pipe(debounceTime(700), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((query) => {
        this.store.dispatch(setSearchQuery({ query }));
      });
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputSubject.next(input.value);
  }

  onRegionChange(region: string): void {
    this.store.dispatch(setFilterRegion({ region }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
