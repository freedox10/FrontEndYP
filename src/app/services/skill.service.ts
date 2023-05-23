import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
 
  //URL = 'https://backendaaf.onrender.com/skill/';

  URL = 'http://localhost:8080/skill/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `detalle/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `borrar/${id}`);
  }

    public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actual/${id}`, skill);
  }
}
