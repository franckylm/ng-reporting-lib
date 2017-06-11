import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportingComponent} from './reporting.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [ReportingComponent],
  exports: [ReportingComponent]
})
export class ReportingModule {
}
