import { Component, OnInit } from '@angular/core';
import { Protocolo } from './../protocolo.model';
import { ProtocoloService } from './../protocolo.service';

@Component({
  selector: 'app-protocolo-read',
  templateUrl: './protocolo-read.component.html',
  styleUrls: ['./protocolo-read.component.css']
})
export class ProtocoloReadComponent implements OnInit {

  protocolos: Protocolo[]
  displayedColumns = ['id','codigo_ano','solicitante','data','hora','resumo','action']

  constructor(private protocoloService: ProtocoloService) { }

  //Iniciar junto com o carregamento da página
  ngOnInit(): void {
    this.protocoloService.read().subscribe(protocolos => {
     this.protocolos = protocolos     
    })
  }

}
