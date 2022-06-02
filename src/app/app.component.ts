import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { tap } from "rxjs";
import { DialogComponent, DialogData } from "./dialog.component";

@Component({
  selector: "app-component",
  template: '<button mat-button (click)="openDialog()">Open dialog</button>',
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog
      .open<DialogComponent, DialogData, boolean>(DialogComponent, {
        data: { animal: "panda" },
      })
      .afterClosed()
      .pipe(tap((result) => console.log(result === true))) // result: boolean | undefined
      .subscribe();
  }
}
