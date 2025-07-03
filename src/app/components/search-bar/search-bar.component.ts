import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { searchCountry } from '../../store/user/user.actions';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private inputSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.inputSubject
      .pipe(debounceTime(700), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((query) => {
        this.store.dispatch(searchCountry({ query }));
      });
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputSubject.next(input.value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
