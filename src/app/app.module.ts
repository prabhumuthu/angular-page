import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { LoginService } from './services/login.service'
import { DashboardService } from './services/dashboard.service'

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { appRoutes } from './router/app.routes'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService,
              DashboardService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
