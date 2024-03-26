import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedComponent } from './shared/shared.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './shared/custom-route-reuse-strategy';

@NgModule({
  declarations: [AppComponent, SharedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    MainModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy, 
      useClass: CustomReuseStrategy
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
