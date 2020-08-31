import { Injectable, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Protocolo } from './protocolo.model'
import { Observable } from 'rxjs';
import { Usuario } from '../login/usuario';
import { Login } from './protocolo-login/login.model';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloService {

  baseUrl = "http://localhost:8080/api/protocolo";

  constructor(
    private snackBar: MatSnackBar, 
    private http: HttpClient, 
    private router: Router) { }
    
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //Metodo para inserção de dados no beckand
  create(protocolo: Protocolo): Observable<Protocolo>{
    return this.http.post<Protocolo>(this.baseUrl, protocolo);
  }

  read(): Observable<Protocolo[]>{
    return this.http.get<Protocolo[]>(this.baseUrl);
  }

  readById(id: string): Observable<Protocolo>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Protocolo>(url);
  }

  update(protocolo: Protocolo): Observable<Protocolo>{
    const url = `${this.baseUrl}/${protocolo.id}`;
    return this.http.put<Protocolo>(url, protocolo);
  }

  delete(id: string): Observable<Protocolo>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Protocolo>(url);
  }

  //Validação de eventos e autenticação
  mostrarMenuEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado: boolean = false

  fazerLogin(login: Login){
    if(login.usuario === 'desenvolvimento' && login.senha === '123' ){

        this.mostrarMenuEmitter.emit(true);
        this.usuarioAutenticado = true;
        this.router.navigate(['/']);

    }else{

      this.mostrarMenuEmitter.emit(false);
      this.usuarioAutenticado = false;
      this.showMessage('Acesso Negado!!!')
    }
  } 

  //Retornar valor booleano para verificar autenticidade
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
