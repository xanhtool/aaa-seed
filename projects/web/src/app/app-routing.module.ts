import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SelectiveStrategy } from './facades/utils/selective-preloading-strategy.service';
import { ApplicationStateService } from './facades/utils/application-state.service';

const routes: Routes = [
  // { path: 'generator', loadChildren: () => import('./pages/generator/generator.module').then(m => m.GeneratorModule) },
  // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

  // { path: 'invitation', loadChildren: () => import('./pages/invitation/invitation.module').then(m => m.InvitationModule) },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '' }
];

const desktopRoutes: Routes = [
  // { path: ':detail', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule), data: { preload: true }, },
  // { path: 'home', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule), data: { preload: true }, },
  ...routes
];

const mobileRoutes: Routes = [
  // { path: ':detail', loadChildren: () => import('./pages/mobile-detail/mobile-detail.module').then(m => m.MobileDetailModule), data: { preload: true }, },
  // { path: 'home', loadChildren: () => import('./pages/mobile-detail/mobile-detail.module').then(m => m.MobileDetailModule), data: { preload: true }, },
  ...routes
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes, { preloadingStrategy: SelectiveStrategy, enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule {
  public constructor(
    private router: Router,
    private applicationStateService: ApplicationStateService
  ) {
    if (this.applicationStateService.getIsMobileResolution()) {
      this.router.resetConfig(mobileRoutes);
    }
  }
}
