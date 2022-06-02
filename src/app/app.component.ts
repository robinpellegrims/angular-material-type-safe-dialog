import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { tap } from "rxjs";
import { DialogComponent } from "./dialog.component";

@Component({
  selector: "app-component",
  template: '<button mat-button (click)="openDialog()">Open dialog</button>',
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog
      .open(DialogComponent, { data: { animal: "panda" } })
      .afterClosed()
      .pipe(tap((result) => console.log(result === true)))
      .subscribe();
  }
}
