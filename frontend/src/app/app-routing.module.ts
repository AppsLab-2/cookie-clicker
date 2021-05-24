import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { ClickerComponent } from './component/clicker/clicker.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './component/shop/shop.component';

const routes: Routes = [
  {path: 'clicker', component: ClickerComponent, canActivate: [AuthGuard] },
  {path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: '/clicker'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
