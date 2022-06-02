import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { BlankComponent } from './pages/blank/blank.component';
import { Page404Component } from './pages/page404/page404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { TablesComponent } from './pages/tables/tables.component';
import { UtilitiesAnimationComponent } from './pages/utilities-animation/utilities-animation.component';
import { UtilitiesBorderComponent } from './pages/utilities-border/utilities-border.component';
import { UtilitiesColorComponent } from './pages/utilities-color/utilities-color.component';
import { UtilitiesOtherComponent } from './pages/utilities-other/utilities-other.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    PageContentComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    BlankComponent,
    Page404Component,
    DashboardComponent,
    ButtonsComponent,
    CardsComponent,
    ChartsComponent,
    TablesComponent,
    UtilitiesAnimationComponent,
    UtilitiesBorderComponent,
    UtilitiesColorComponent,
    UtilitiesOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
