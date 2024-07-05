import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExchengeService } from '../../../services/exchenge.service';
import { Observable, Subscription, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  usdToUah: number=0;
  eurToUah: number=0;
  countdown: number = 10;
  private subscription!: Subscription;

  constructor(private exchangeRateService: ExchengeService) { }

  ngOnInit(): void {
    this.fetchRates();
    this.subscription = interval(1000).subscribe(() => {
      this.countdown--;
      if (this.countdown === 0) {
        this.fetchRates();
        this.countdown = 10;

      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  fetchRates(): void {
    this.exchangeRateService.getRates().subscribe(data => {
      this.usdToUah = data.conversion_rates.UAH;
      this.eurToUah = data.conversion_rates.EUR;
    });
  }
}
