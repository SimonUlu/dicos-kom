import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListComponent } from './list/list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "list", component: ListComponent, canActivate: [authGuard]},
  {path: "login", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
