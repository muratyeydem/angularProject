import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrewService } from '../crew.service';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css'],
})
export class CrewDetailComponent implements OnInit {
  crew: any;

  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.crew = this.crewService.getCrewList().find((c) => c.id === id);
  }
}
