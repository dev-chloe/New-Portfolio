import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CursorComponent } from './cursor/cursor.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';
import { AppService } from './app.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CursorComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    WhatIDoComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
