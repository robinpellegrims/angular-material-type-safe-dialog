import {Component, inject} from "@angular/core";
import {tap} from "rxjs";
import {DialogComponent} from "./dialog.component";
import {DialogService} from "./dialog.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: "app-component",
    template: '<button mat-button (click)="openDialog()">Open dialog</button>',
    standalone: true,
    imports: [MatButtonModule],
})
export class AppComponent {
    private dialog = inject(DialogService)

    openDialog() {
        this.dialog
            .open(DialogComponent, {data: {animal: "panda"}})
            .afterClosed()
            .pipe(tap((result) => console.log(result === true))) // result: boolean | undefined
            .subscribe();
    }
}
