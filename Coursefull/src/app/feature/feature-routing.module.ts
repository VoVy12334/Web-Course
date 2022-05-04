import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { TutorialsListComponent } from './component/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './component/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './component/add-tutorial/add-tutorial.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' }, 
      { path: 'profile', component: ProfileComponent },
      { path: 'user/:id', component: BoardUserComponent },
      { path: 'mod', component: BoardModeratorComponent },
      { path: 'admin', component: BoardAdminComponent },
      { path: 'tutorials', component: TutorialsListComponent },
      { path: 'tutorials/:id', component: TutorialDetailsComponent },
      { path: 'add/:id', component: AddTutorialComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
