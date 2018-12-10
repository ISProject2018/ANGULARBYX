import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../component/homepage/homepage.component';
import { FirstExampleComponent } from '../component/first-example/first-example.component';
import { SecondExampleComponent } from '../component/second-example/second-example.component';
import { ThirdExampleComponent } from '../component/third-example/third-example.component';
import { OrderDetailComponent } from '../component/order-detail/order-detail.component';
import { OrderListComponent } from '../component/order-list/order-list.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'first', component: FirstExampleComponent },
  { path: 'second', component: SecondExampleComponent },
  { path: 'third', component: ThirdExampleComponent },
  { path: 'order-detail', component: OrderDetailComponent },
  { path: 'order-list', component: OrderListComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
