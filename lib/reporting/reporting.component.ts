import {Component, Input} from '@angular/core';

@Component({
  selector: 'demo-greeter',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent {

  @Input() name: string;

}
