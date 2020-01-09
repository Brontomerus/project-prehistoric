import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';


const publicRoutes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'data', component: DataComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(publicRoutes)],
    exports: [RouterModule]

})
export class PublicRoutingModule { }
