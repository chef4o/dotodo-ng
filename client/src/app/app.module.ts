import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedComponent } from './shared/shared.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { AuthModule } from './core/auth/auth.module';
import { ErrorPagesModule } from './shared/error-handling/error-pages/error-pages.module';

@NgModule({
  declarations: [AppComponent, SharedComponent],
  imports: [
    AuthModule,
    ErrorPagesModule,
    CoreModule,
    SharedModule,
    MainModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
