import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //Defalut Landing Route (lazy Loaded)
    loadChildren: () =>
      import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'owner',
    loadChildren: () =>
      import('./modules/owner-module/owner-module.module').then(
        (m) => m.OwnerModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
