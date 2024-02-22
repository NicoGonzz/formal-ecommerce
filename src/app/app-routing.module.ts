import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersiteComponent } from './usersite/usersite.component';
import { LoginComponent } from './usersite/login/login.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'usersite', component: UsersiteComponent,
    pathMatch: 'full',
  children: [
    { path: 'login', component: LoginComponent }
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
