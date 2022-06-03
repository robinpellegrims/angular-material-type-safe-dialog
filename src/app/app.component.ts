import { Component } from "@angular/core";
import { tap } from "rxjs";
import { DialogComponent } from "./dialog.component";
import { DialogService } from "./dialog.service";

@Component({
  selector: "app-component",
  template: '<button mat-button (click)="openDialog()">Open dialog</button>',
})
export class AppComponent {
  constructor(public dialog: DialogService) {}

  openDialog() {
    this.dialog
      .open(DialogComponent, { data: { animal: "panda" } })
      .afterClosed()
      .pipe(tap((result) => console.log(result === true))) // result: boolean | undefined
      .subscribe();
  }
}
