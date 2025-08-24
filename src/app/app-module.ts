import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CounterComponent } from './counter-component/counter-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDisplayComponent } from './product-display-component/product-display-component';

@NgModule({
  declarations: [
    App,
    CounterComponent,
    ProductListComponent,
    ProductDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
