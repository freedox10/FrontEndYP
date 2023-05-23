import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  persona: persona = null;

  //persona: persona = new persona("","","");
  //face: string = '../../../assets/foto01.jpg';

  constructor(public personaService: PersonaService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
        (this.persona = data)
      )
  }

}
