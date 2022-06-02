import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { BlankComponent } from './pages/blank/blank.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { UtilitiesAnimationComponent } from './pages/utilities-animation/utilities-animation.component';
import { UtilitiesBorderComponent } from './pages/utilities-border/utilities-border.component';
import { UtilitiesColorComponent } from './pages/utilities-color/utilities-color.component';
import { UtilitiesOtherComponent } from './pages/utilities-other/utilities-other.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: '',
    component:IndexComponent,
    children: [
      { path: 'blank', component: BlankComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'charts', component: ChartsComponent },
      { path: '', component: DashboardComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'utilities-animation' , component: UtilitiesAnimationComponent },
      { path: 'utilities-border' , component: UtilitiesBorderComponent },
      { path: 'utilities-color' , component: UtilitiesColorComponent },
      { path: 'utilities-other' , component: UtilitiesOtherComponent },
      { path: '**', component: Page404Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
