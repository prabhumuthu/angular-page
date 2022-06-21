import { Routes } from '@angular/router'
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';

export const appRoutes: Routes = [
    { path: "", component: LoginComponent },
    {
        path: "dashboard", component: DashboardComponent,
        children:[
            {path:"about",component:AboutComponent},
            {path:"contact",component:ContactComponent},
            {path:"portfolio",component:PortfolioComponent}
        ]
    }
]