import { Directive, Inject, Injectable } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { ComponentType } from "@angular/cdk/overlay";

@Directive()
export abstract class StronglyTypedDialog<DialogData, DialogResult> {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<
      StronglyTypedDialog<DialogData, DialogResult>,
      DialogResult
    >
  ) {}
}

@Injectable({ providedIn: "root" })
export class DialogService {
  constructor(public dialog: MatDialog) {}

  open = <DialogData, DialogResult>(
    component: ComponentType<StronglyTypedDialog<DialogData, DialogResult>>,
    config?: MatDialogConfig<DialogData>
  ): MatDialogRef<
    StronglyTypedDialog<DialogData, DialogResult>,
    DialogResult
  > => this.dialog.open(component, config);
}
