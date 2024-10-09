import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeRegisterComponent } from './cafe-register/cafe-register.component';
import { AppOwnerRouting } from './owner.routing';

@NgModule({
  declarations: [CafeRegisterComponent],
  imports: [CommonModule, AppOwnerRouting],
})
export class OwnerModuleModule {}
