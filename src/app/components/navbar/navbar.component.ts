import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleTheme } from '../../store/theme.actions';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private store = inject(Store);

  toggleTheme() {
    this.store.dispatch(toggleTheme());

    // document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
