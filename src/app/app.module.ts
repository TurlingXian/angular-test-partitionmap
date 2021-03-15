import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  AccessibilityModule,
  ColorServiceModule,
  colorSets,
  IconModule,
  SelectModule
} from "@ux-aspects/ux-aspects";
import { PartitionMapModule, TooltipModule } from "@ux-aspects/ux-aspects";

@NgModule({
  imports: [
    AccessibilityModule,
    ColorServiceModule.forRoot(colorSets.keppel),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PartitionMapModule,
    TooltipModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
