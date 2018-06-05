import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroesAgComponent }      from './heroes-ag/heroes-ag.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } },
  { path: 'dictionary', component: HeroesComponent, data: { text: 'Dictionary (IgniteUI)' } },
  { path: 'dictionary-ag', component: HeroesAgComponent, data: { text: 'Dictionary (Ag-Grid)' } },
  { path: '*', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
