import { Component } from '@angular/core';
const newsSource = require ('./news.json');

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  news = newsSource;
}
