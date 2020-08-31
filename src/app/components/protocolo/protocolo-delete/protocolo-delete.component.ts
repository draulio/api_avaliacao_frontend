import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Protocolo } from './../protocolo.model';
import { ProtocoloService } from '../protocolo.service';

@Component({
  selector: 'app-protocolo-delete',
  templateUrl: './protocolo-delete.component.html',
  styleUrls: ['./protocolo-delete.component.css']
})
export class ProtocoloDeleteComponent implements OnInit {

  protocolo: Protocolo

  constructor(
    private protocoloService: ProtocoloService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.protocoloService.readById(id).subscribe(protocolo => {
      this.protocolo = protocolo
    });
  }

  deleteProtocolo(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.protocoloService.delete(id).subscribe(() => { 
    })
    this.protocoloService.showMessage("Dados Excluidos!!!")
    this.router.navigate(['/protocolo']) 
  }

  cancelProtocolo(): void{
    this.router.navigate(['/protocolo'])
  }

}
