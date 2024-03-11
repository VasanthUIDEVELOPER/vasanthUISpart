import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Headercomponents } from './Header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TopmenuComponent } from './Header/topmenu/topmenu.component';
import { MainmenuComponent } from './Header/mainmenu/mainmenu.component';
import { containerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import{ProductDetailComponent} from './container/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    Headercomponents,
    TopheaderComponent,
    TopmenuComponent,
    MainmenuComponent,
    containerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
