import { VERSION as CDK_VERSION } from "@angular/cdk";
import { VERSION as MAT_VERSION } from "@angular/material/core";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";

if (environment.production) {
  enableProdMode();
}

/* eslint-disable no-console */
console.info("Angular CDK version", CDK_VERSION.full);
console.info("Angular Material version", MAT_VERSION.full);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, MatButtonModule),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
