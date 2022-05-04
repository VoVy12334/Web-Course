import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { ComponentsModule } from '../components/components.module';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';
import { AddTutorialComponent } from './component/add-tutorial/add-tutorial.component';
import { ComponentviewComponent } from './component/componentview/componentview.component';
import { TutorialDetailsComponent } from './component/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './component/tutorials-list/tutorials-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeatureComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ProfileComponent,
    AddTutorialComponent,
    ComponentviewComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule, // gọi component module vào chỗ này là dùng được
    ComponentsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class FeatureModule { }
