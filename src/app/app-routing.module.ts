import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'product/delete/:id', component: ProductDeleteComponent },
  { path: 'product/update/:id', component: ProductUpdateComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product', component: ProductComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },  
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
