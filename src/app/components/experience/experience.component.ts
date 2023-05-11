import { Component, Input, OnInit } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';
import { WorkListService } from 'src/app/services/work-list.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() title: string = 'Experiencia';

  workList: WorkModel[] = [];

  constructor(private workListService: WorkListService){ }

  ngOnInit(): void {
    this.getWorkList();
  }


  getWorkList(): void{
    this.workListService.getWorks().subscribe((workList) => { this.workList = workList });
  }

  addWork(): void {
    let newId: number = this.workList.length + 1
    const newWork: WorkModel = {
      id: newId,
      title: `trabajo ${newId}`,
      urlImage: "https://algo.com.ar",
      description: "El mejor trabajo del mundo"
    }
    this.workListService.add(newWork as WorkModel)
    .subscribe((work: WorkModel) => {
      this.workList.push(work);
    });
  }

  removeWorkToList(workToRemove: WorkModel): void {
    this.workListService.remove(workToRemove.id).subscribe();
    this.getWorkList();
  }
}
