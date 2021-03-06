import { Component } from "@angular/core";
import { StronglyTypedDialog } from "src/app/dialog.service";

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
})
export class DialogComponent extends StronglyTypedDialog<DialogData, boolean> {
  cancelClick = () => this.dialogRef.close(false);
  okClick = () => this.dialogRef.close(true);
}
