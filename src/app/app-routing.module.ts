import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { CryptoWatchRestComponent } from './crypto-watch-rest/crypto-watch-rest.component';

const routes: Routes = [
  { path: 'calc', component: CalculatorFormComponent },
  { path: 'coin', component: CryptoWatchRestComponent },
  { path: 'f-calc', loadChildren: () => import('./form-module/form-module.module').then(m => m.FormModuleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
