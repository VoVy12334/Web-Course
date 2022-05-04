import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [ // bên này mình không cần import những componet trong pages nữa. chỉ cần import module là dùng được
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    NgxPaginationModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
