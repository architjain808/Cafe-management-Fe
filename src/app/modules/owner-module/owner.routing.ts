import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeRegisterComponent } from './cafe-register/cafe-register.component';

const routes: Routes = [
  {
    path: '',
    component: CafeRegisterComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppOwnerRouting {}
