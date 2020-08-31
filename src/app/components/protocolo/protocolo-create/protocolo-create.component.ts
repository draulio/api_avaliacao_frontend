import { Component, OnInit } from '@angular/core';
import { ProtocoloService } from './../protocolo.service'
import { Router } from '@angular/router'
import { Protocolo } from './../protocolo.model'


@Component({
  selector: 'app-protocolo-create',
  templateUrl: './protocolo-create.component.html',
  styleUrls: ['./protocolo-create.component.css']
})
export class ProtocoloCreateComponent implements OnInit {

protocolo: Protocolo = {
    codigo_ano: '',
    resumo: '',
    solicitante: ''
}

  //Atribuindo a nova rota ao construtor
  constructor(private protocoloService: ProtocoloService,
    private router: Router) { }

  ngOnInit(): void {  }

  createProtocolo(): void{
    this.protocoloService.create(this.protocolo).subscribe(() => {
      this.protocoloService.showMessage('Cadastrado com sucesso!!!')
      this.router.navigate(['/protocolo'])
    })
  }
  
  cancelProtocolo(): void{
    this.router.navigate(['/protocolo'])
  }

}
