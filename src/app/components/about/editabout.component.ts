import { Component } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.scss']
})
export class EditaboutComponent {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute,
              private  personaService: PersonaService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any) {

  }

}
