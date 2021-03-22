import  {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './app/all-users/all-users.component';
import { FemaleUsersComponent } from './app/female/female-users/female-users.component';
import { MaleUsersComponent } from './app/male/male-users/male-users.component';


const routes: Routes= [
  {path: 'all-users' , component: AllUsersComponent },
  {path: 'female-users' , component: FemaleUsersComponent },
  {path: 'male-users' , component: MaleUsersComponent }
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule{}
