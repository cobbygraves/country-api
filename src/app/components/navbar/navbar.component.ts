import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleTheme } from '../../store/theme/theme.actions';
import { selectTheme } from '../../store/theme/theme.selector';
// import { AsyncPipe } from '@angular/common';
// import { Observable } from 'rxjs';
import { ToggleSwitch } from 'primeng/toggleswitch';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [ToggleSwitch, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public store = inject(Store);
  // themeToggle$!: Observable<boolean>;
  themeMode = signal<boolean>(false);

  customSwitch = {
    root: {
      height: '23px',
      borderRadius: '4px',
    },
    handle: {
      size: '23px',
      borderRadius: '4px',
    },
  };

  toggleTheme() {
    this.store.dispatch(toggleTheme());
    const themeToggle$ = this.store.select(selectTheme);
    themeToggle$.subscribe((isDarkMode: boolean) => {
      this.themeMode.set(isDarkMode);
      document.body.classList.toggle('dark-mode', isDarkMode);
      this.setHeaderBg(isDarkMode ? '#2c3e50' : '#ffffff');
    });
  }

  setHeaderBg(color: string) {
    document.documentElement.style.setProperty('--header-bg', color);
    document.documentElement.style.setProperty('--card-bg', color);
  }
}
