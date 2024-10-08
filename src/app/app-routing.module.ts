import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  component:ProductsComponent,
  path: 'home'
  },
  {
  component:RegisterPageComponent,
  path: 'registerPage'
  },
  {
  component:ProductsComponent,
  path: 'products'
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
