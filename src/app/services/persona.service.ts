import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
  //URL = 'https://backendaaf.onrender.com/personas/';

  URL = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + 'lista'); 
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detalle/${id}`);
  }

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actual/${id}`, Persona);
  }  
}
