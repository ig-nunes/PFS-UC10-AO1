import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoComponent } from './views/atendimento/atendimento.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { DuvidasComponent } from './views/duvidas/duvidas.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { QuemSomosComponent } from './views/quem-somos/quem-somos.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'atendimento', component: AtendimentoComponent },
  { path:'duvidas', component: DuvidasComponent },
  { path:'quem-somos', component: QuemSomosComponent },
  { path:'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
