import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './componentes/home/home.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';

// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent},
    // { path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES,{useHash:true});
