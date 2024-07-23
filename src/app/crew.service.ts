import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  private crewList = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      nationality: 'American',
      title: 'Captain',
      daysOnBoard: 30,
      dailyRate: 100,
      currency: 'USD',
      totalIncome: 3000,
      certificates: [
        { name: 'Safety Certificate', date: '2023-01-01' },
        { name: 'Medical Certificate', date: '2023-02-01' },
      ],
    },
    // Diğer crew üyeleri
  ];

  getCrewList() {
    return this.crewList;
  }

  getCrewById(id: string) {
    return this.crewList.find((c) => c.id === id);
  }
}
