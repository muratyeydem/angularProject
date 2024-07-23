import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCrewDialogComponent } from './add-crew-dialog/add-crew-dialog.component'; // Diyalog bileşenini içe aktar

@Component({
  selector: 'app-add-crew-modal',
  templateUrl: './add-crew-modal.component.html',
  styleUrls: ['./add-crew-modal.component.css'],
})
export class AddCrewModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCrewDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      // Yeni crew eklenmişse listeyi güncelle
    });
  }
}
