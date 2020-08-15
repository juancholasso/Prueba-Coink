import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup/numbervalidate',
    loadChildren: () => import('./signup-numbervalidate/signup-numbervalidate.module').then( m => m.SignupNumbervalidatePageModule)
  },
  {
    path: 'signup/dataaccount',
    loadChildren: () => import('./signup-datacount/signup-datacount.module').then( m => m.SignupDatacountPageModule)
  },
  {
    path: 'signup/dataconfirm',
    loadChildren: () => import('./signup-dataconfirm/signup-dataconfirm.module').then( m => m.SignupDataconfirmPageModule)
  },
  {
    path: 'signup/security',
    loadChildren: () => import('./signup-security/signup-security.module').then( m => m.SignupSecurityPageModule)
  },
  {
    path: 'signup-authorize',
    loadChildren: () => import('./signup-authorize/signup-authorize.module').then( m => m.SignupAuthorizePageModule)
  },
  {
    path: 'signup/securityvalidate',
    loadChildren: () => import('./signup-securityvalidate/signup-securityvalidate.module').then( m => m.SignupSecurityvalidatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
