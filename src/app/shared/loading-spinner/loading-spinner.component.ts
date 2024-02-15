import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from 'src/app/services/global-loader.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinnerComponent {
  constructor(public globalLoaderService: GlobalLoaderService) {
  }
}
