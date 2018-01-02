import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienesSomos/quienesSomos.component';
import { ConsultasYServiciosComponent } from './consultasYServicios/consultasYServicios.component';
import { ContactoComponent } from './contacto/contacto.component';

//Crear rutas
const appRoutes: Routes = [
	// {path: '', component:HomeComponent},
	{path: 'home', component:HomeComponent},
	{path: 'quienesSomos', component:QuienesSomosComponent},
	{path: 'consultasYServicios', component:ConsultasYServiciosComponent},
	{path: 'contacto', component:ContactoComponent},
	{path: '**', component:HomeComponent},
];

//Se crea el nav html de esta forma: <a [routerLink]="['quienesSomos']" [routerLinkActive]="['claseLinkActivo']"></a>
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);