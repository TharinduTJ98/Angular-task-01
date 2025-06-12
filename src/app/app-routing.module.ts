import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { TemplateDrivenComponent } from './Components/template-driven/template-driven.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'home', component: HomeComponent,
    children:[
      {path:'template-driven/:id', component: TemplateDrivenComponent},
      {path:'reactive-form/:id', component: ReactiveFormComponent}
    ]
  },
  {path:'user', component: UserComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
