import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { AuthModule } from './core/auth/auth.module';
import { ErrorPagesModule } from './shared/error-handling/error-pages/error-pages.module';
import { MainRoutingModule } from './main/main-routing.module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'; // Import AngularFire
import { environment } from '../environments/environment.development'; // Import your Firebase config from environment

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainRoutingModule,
    AuthModule,
    ErrorPagesModule,
    CoreModule,
    SharedModule,
    MainModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig))
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
