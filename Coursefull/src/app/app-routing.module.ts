import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './feature/home/home.component';
import { TutorialsListComponent } from './feature/component/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './feature/component/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './feature/component/add-tutorial/add-tutorial.component';
import { FeatureComponent } from './feature/feature.component';



const routes: Routes = [ 
  
  { path: '', redirectTo: 'home', pathMatch: 'full' } ,
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add/:id', component: AddTutorialComponent },
  {path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
