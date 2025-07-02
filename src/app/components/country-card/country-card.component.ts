import { Component, Input, input } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-card',
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input() country!: Country;
}
