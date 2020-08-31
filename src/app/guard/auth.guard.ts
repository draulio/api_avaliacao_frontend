import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProtocoloService } from './../components/protocolo/protocolo.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private protocoloService: ProtocoloService,
    private router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    if(this.protocoloService.usuarioEstaAutenticado()){
      return true;
    }
      this.router.navigate(['/login']);
      return false;
  }

}
