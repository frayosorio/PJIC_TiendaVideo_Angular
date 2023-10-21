import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empresa } from '../entidades/Empresa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}empresas`;
  }

  public listar(): Observable<Empresa[]> {
    let urlT = `${this.url}/listar`;
    return this.http.get<Empresa[]>(urlT);
  }

}
