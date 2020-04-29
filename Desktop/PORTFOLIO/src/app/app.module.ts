import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CursorComponent } from './cursor/cursor.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoadingInterceptor } from 'src/interceptor/loading.interceptor';
import { ServicesModule } from 'src/services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CursorComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    WhatIDoComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    AppRoutingModule,
    
    ServicesModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
