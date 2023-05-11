import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const works = [
      {
        "id": 1,
        "title": "Primer Trabajo",
        "urlImage": "../../../assets/img/experiencia.png",
        "description": "Me encanta ese trabajo"
      },
      {
        "id": 2,
        "title": "Segundo Trabajo",
        "urlImage": "../../../assets/img/experiencia.png",
        "description": "Me encanta ese trabajo tambien"
      },
      {
        "id": 3,
        "title": "Tercer Trabajo",
        "urlImage": "../../../assets/img/experiencia.png",
        "description": "Me encanta ese trabajo igual que los otros"
      },
      {
        "id": 4,
        "title": "Cuarto Trabajo",
        "urlImage": "../../../assets/img/experiencia.png",
        "description": "Me encanta ese trabajo igual que los otros"
      },
      {
        "id": 5,
        "title": "Quinto Trabajo",
        "urlImage": "../../../assets/img/experiencia.png",
        "description": "Me encanta ese trabajo tambien"
      },
    ];
    return {works};
  }
}
