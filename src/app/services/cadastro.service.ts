import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private url = "http://localhost:3000/login";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response'
  }

  private teste: any;

  constructor(private http: HttpClient) { }

  // id: number;
  // /${id}

  login(user: Usuarios): Observable<any> {
    return this.http.get(`${this.url}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response'
    } ) 
  }


  mostrarCadastros(): Observable<any> {
    return this.http.get(this.url, {
      headers: new HttpHeaders({ 'Content-type': 'application/json' }),
      observe: 'response'
    })
  }

  adicionarCadastro(cadastro: Usuarios): Observable<any> {
    return this.http.post(this.url, { 
      usuario: cadastro.usuario, password: cadastro.password, email: cadastro.email }, {
        headers: new HttpHeaders({ 'Content-type': 'application/json' }),
        observe: 'response'
      })
  }

  // editarCadastro(cadastro: Usuarios, id:number): Observable<Usuarios> {
  //   return this.http.put<Usuarios>(`${this.url}/${id}`, { 
  //     usuario: cadastro.usuario, password: cadastro.password, email: cadastro.email }).pipe(
  //       res => res,
  //       error => error
  //     )
  // }
  
  editarNomeCadastro(cadastro: string, infoemail:string, senha:string, id:number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, { 
      usuario: cadastro, email: infoemail, password: senha }, {
        headers: new HttpHeaders({ 'Content-type': 'application/json' }),
        observe: 'response'
      })
  }

  deletarCadastro(id:number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders({ 'Content-type': 'application/json' }),
      observe: 'response'
    })
  }

}
