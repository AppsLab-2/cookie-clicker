import { ClickerComponent } from './clicker/clicker.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', component: ClickerComponent},
  {path: 'shop', component: ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
