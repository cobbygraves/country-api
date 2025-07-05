import { Component, inject } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-error',
  imports: [Dialog, ButtonModule, InputTextModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  errorService = inject(ErrorService);
  isError = this.errorService.error() ? true : false;

  showDialog() {
    this.errorService.setError(null);
  }

  onCloseModal(event: boolean) {
    if (!event) {
      this.errorService.setError(null);
    }
  }
}
