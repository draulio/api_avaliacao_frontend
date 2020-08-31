import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProtocoloCrudComponent} from './views/protocolo-crud/protocolo-crud.component';
import {ProtocoloCreateComponent} from './components/protocolo/protocolo-create/protocolo-create.component'
import { ProtocoloUpdateComponent } from './components/protocolo/protocolo-update/protocolo-update.component';
import { ProtocoloDeleteComponent } from './components/protocolo/protocolo-delete/protocolo-delete.component';
import { ProtocoloLoginComponent } from './components/protocolo/protocolo-login/protocolo-login.component'
import { AuthGuard } from './../app/guard/auth.guard'
 
const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },{
    path:"protocolo",
    component: ProtocoloCrudComponent,
    canActivate: [AuthGuard]
  },{
    path:"protocolo/create",
    component: ProtocoloCreateComponent,
    canActivate: [AuthGuard]
  },{
    path:"protocolo/update/:id",
    component:ProtocoloUpdateComponent,
    canActivate: [AuthGuard]
  },{
    path:"protocolo/delete/:id",
    component:ProtocoloDeleteComponent,
    canActivate: [AuthGuard]
  },{
    path:"login",
    component:ProtocoloLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
