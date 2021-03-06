import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
	imports: [ HttpClientModule, RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
// app-routing.module has a natural selector <router-outlet>
