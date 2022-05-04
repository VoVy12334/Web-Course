import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

// khi đó pages module sẽ chứa home, login, register

@NgModule({
  declarations: [ LoginComponent, RegisterComponent],
  imports: [
    CommonModule, // lỗi do thiều module
    FormsModule
  ]
})
export class PagesModule { }
