import { Component } from '@angular/core';
import { ExchengeService } from '../../../services/exchenge.service';

@Component({
  selector: 'app-exchenge',
  templateUrl: './exchenge.component.html',
  styleUrl: './exchenge.component.css'
})
export class ExchengeComponent {
  rates: any = {};
  amount1: number = 1;
  currency1: string = 'USD';
  amount2: number = 1;
  currency2: string = 'UAH';

  constructor(private exchangeRateService: ExchengeService) { }

  ngOnInit(): void {
    this.exchangeRateService.getRates("USD").subscribe(data => {
      this.rates = data.conversion_rates;
      this.convertCurrency();
    });
  }

  convertCurrency() {
    if (this.currency1 === this.currency2) {
      this.amount2 = this.amount1;
    } else {
      const rate = this.rates[this.currency2] / this.rates[this.currency1];
      this.amount2 = +(this.amount1 * rate).toFixed(2);
    }
  }

  handleAmount1Change(event: Event) {
    this.amount1 = +(event.target as HTMLInputElement).value;
    this.convertCurrency();
  }

  handleCurrency1Change(event: Event) {
    this.currency1 = (event.target as HTMLSelectElement).value;
    this.convertCurrency();
  }

  handleAmount2Change(event: Event) {
    this.amount2 = +(event.target as HTMLInputElement).value;
    const rate = this.rates[this.currency1] / this.rates[this.currency2];
    this.amount1 = +(this.amount2 * rate).toFixed(2);
  }

  handleCurrency2Change(event: Event) {
    this.currency2 = (event.target as HTMLSelectElement).value;
    this.convertCurrency();
  }
  swapCurrencies() {
    [this.currency1, this.currency2] = [this.currency2, this.currency1];
    [this.amount1, this.amount2] = [this.amount2, this.amount1];
    this.convertCurrency();
  }
}
