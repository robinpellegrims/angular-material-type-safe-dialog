import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogComponent } from "src/app/dialog.component";

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
