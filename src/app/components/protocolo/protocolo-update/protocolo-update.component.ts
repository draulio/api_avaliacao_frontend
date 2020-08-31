import { Component, OnInit } from '@angular/core';
import { ProtocoloService } from '../protocolo.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Protocolo } from './../protocolo.model'

@Component({
  selector: 'app-protocolo-update',
  templateUrl: './protocolo-update.component.html',
  styleUrls: ['./protocolo-update.component.css']
})
export class ProtocoloUpdateComponent implements OnInit {

  protocolo: Protocolo

  constructor(
    private protocoloService: ProtocoloService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.protocoloService.readById(id).subscribe(protocolo => {
      this.protocolo = protocolo
    });
  }

  updateProtocolo(): void{
    this.protocoloService.update(this.protocolo).subscribe(() => {
      this.protocoloService.showMessage("Dados atualizado!!!")
      this.router.navigate(['/protocolo'])  
    })
  }

  cancelProtocolo(): void{
    this.router.navigate(['/protocolo'])
  }

}
