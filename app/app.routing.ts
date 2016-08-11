import { Routes, RouterModule } from '@angular/router'

import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component'

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(appRoutes);