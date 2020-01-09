import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PublicRoutingModule } from './public-routing.module';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [PublicComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DataComponent
    ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    NgbModule
  ]
})

export class PublicModule { }
