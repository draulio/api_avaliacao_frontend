import { Component, OnInit } from '@angular/core';

//Imortando nova rota para protocolo-create 
import { Router } from '@angular/router'


@Component({
  selector: 'app-protocolo-crud',
  templateUrl: './protocolo-crud.component.html',
  styleUrls: ['./protocolo-crud.component.css']
})
export class ProtocoloCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Navegar para tela ProtocoloCreate
  navigateToProtocoloCreate(): void{
    this.router.navigate(['/protocolo/create']);
  }

}
