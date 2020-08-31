import { Component, OnInit } from '@angular/core';
import { ProtocoloService } from '../../protocolo/protocolo.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private protocoloService: ProtocoloService){  }

  ngOnInit(){
    this.protocoloService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }  
}
