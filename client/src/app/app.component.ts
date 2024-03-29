import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BackgroundColorService } from './core/nav/background-color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DOTODO Task Manager';
  public selectedPageBg: string;

  constructor(
    private router: Router,
    private pageTitle: Title,
    public backgroundColorService: BackgroundColorService
  ) {
    this.router.events.pipe(
      filter((e): e is ActivationStart => e instanceof ActivationStart),
      map(e => e.snapshot.data?.['title']),
      filter((d) => !!d)
    ).subscribe((pageTitle) => {
      this.pageTitle.setTitle(pageTitle);
    });

    this.selectedPageBg = this.backgroundColorService.selectedPageBg;
  }
}
