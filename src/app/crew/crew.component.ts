import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  crewList: any[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'nationality',
    'title',
    'daysOnBoard',
    'dailyRate',
    'currency',
    'totalIncome',
  ];

  constructor(private crewService: CrewService) {}

  ngOnInit() {
    this.crewList = this.crewService.getCrewList();
  }

  openAddCrewModal() {
    // Add Crew Modal açma işlevi
  }
}
