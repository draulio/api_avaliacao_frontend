import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/component/login/auth.service';
import { Usuario } from './usuario'
import { Auth2Service } from './auth2.service';
import { Router } from '@angular/router';
import { ProtocoloService } from '../protocolo/protocolo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario

  constructor(private protocoloService: ProtocoloService, private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    console.log(this.usuario.nome)
  }

}
