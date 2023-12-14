import { Component } from "@angular/core";
import { StronglyTypedDialog } from "src/app/dialog.service";
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

interface DialogData {
  animal: string;
}

@Component({
  selector: "example-dialog",
  template: `
    <h1 mat-dialog-title>Favorite Animal</h1>
    <mat-dialog-content>
      <p>My favorite animal is "{{ data.animal }}".</p>
      <p>Do you approve?</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="cancelClick()">Cancel</button>
      <button mat-button (click)="okClick()">Ok</button>
    </mat-dialog-actions>
  `,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButtonModule,
  ],
  standalone: true,
})
export class DialogComponent extends StronglyTypedDialog<DialogData, boolean> {
  protected cancelClick = () => this.dialogRef.close(false);
  protected okClick = () => this.dialogRef.close(true);
}
