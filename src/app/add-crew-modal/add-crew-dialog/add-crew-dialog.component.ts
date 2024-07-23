import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-crew-dialog',
  templateUrl: './add-crew-dialog.component.html',
  styleUrls: ['./add-crew-dialog.component.css'],
})
export class AddCrewDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddCrewDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
