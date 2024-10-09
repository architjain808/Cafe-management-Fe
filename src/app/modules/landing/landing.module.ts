import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppLandingRouteModule } from './landing.routing';
import { NgPrimeModule } from 'src/app/common/modules/ng-prime/ng-prime.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, AppLandingRouteModule, NgPrimeModule],
})
export class LandingModule {}
