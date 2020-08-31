import { Component, OnInit } from '@angular/core';
import { Login } from './login.model'
import { ProtocoloService } from '../protocolo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protocolo-login',
  templateUrl: './protocolo-login.component.html',
  styleUrls: ['./protocolo-login.component.css']
})
export class ProtocoloLoginComponent implements OnInit {

  login: Login = {
    usuario: "",
    senha:""
  }

  constructor(private protocoloService: ProtocoloService, private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin(): void{
    //console.log(this.login);
    this.protocoloService.fazerLogin(this.login);
  }
  

}
