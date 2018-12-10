import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FirstExampleComponent } from './component/first-example/first-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeInterface } from './class/codeInterface';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { SecondExampleComponent } from './component/second-example/second-example.component';
import { AppRoutingModule } from './module/app-routing.module';
import { MaterialModule } from './module/material.module';
import { DialogComponent } from './component/share-component/dialog/dialog.component';
import { ValidatorComponent } from './component/share-component/validator/validator.component';
import { ThirdExampleComponent } from './component/third-example/third-example.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogCartComponent } from './component/share-component/dialog-cart/dialog-cart.component';
import { NgxSpinnerModule, SPINNER_ANIMATIONS } from '@hardpool/ngx-spinner';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { OrderListComponent } from './component/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstExampleComponent,
    NavBarComponent,
    HomepageComponent,
    SecondExampleComponent,
    DialogComponent,
    ValidatorComponent,
    ThirdExampleComponent,
    DialogCartComponent,
    OrderDetailComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightModule.forRoot({ theme: 'vs2015' }),
    AppRoutingModule,
  ],
  entryComponents: [
    DialogComponent,
    DialogCartComponent
  ],
  providers: [CodeInterface],
  bootstrap: [AppComponent]
})
export class AppModule { }
