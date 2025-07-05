import { Injectable, signal } from '@angular/core';
import { Error as CustomError } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  error = signal<CustomError | null>(null);

  setError(error: CustomError | null) {
    console.log(error);
    this.error.set(error);
  }
}
