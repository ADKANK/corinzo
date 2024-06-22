import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProductsComponent } from './pages/products/products.component';
import { RailingsComponent } from './pages/railings/railings.component';
import { BrochuresComponent } from './pages/brochures/brochures.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'projects',
        component: ProjectComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'railings',
        component: RailingsComponent,
    },
    {
        path: 'brochures',
        component: BrochuresComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
