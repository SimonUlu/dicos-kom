import { Routes } from '@angular/router';
import { HomeComponent } from './static/home/home.component';

export const routes: Routes = [
    {
        path: 'views',
        loadChildren: () => import("./views/views.module").then(m => m.ViewsModule)
    },
    {
        path: '',
        component: HomeComponent
    }
];
