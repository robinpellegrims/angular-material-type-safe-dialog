import { Directive, Inject, Injectable, inject, Type } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { ComponentType } from "@angular/cdk/overlay";

@Directive()
export abstract class StronglyTypedDialog<DialogData, DialogResult> {
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  protected dialogRef: MatDialogRef<
    StronglyTypedDialog<DialogData, DialogResult>,
    DialogResult
  > = inject(MatDialogRef);
}

@Injectable({ providedIn: "root" })
export class DialogService {
  protected dialog = inject(MatDialog);

  open = <DialogData, DialogResult>(
    component: Type<StronglyTypedDialog<DialogData, DialogResult>>,
    config?: MatDialogConfig<DialogData>
  ): MatDialogRef<
    StronglyTypedDialog<DialogData, DialogResult>,
    DialogResult
  > => this.dialog.open(component, config);
}
