import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';



@NgModule({
  declarations: [
    HeaderBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderBarComponent
  ]
})
export class ComponentsModule { }

