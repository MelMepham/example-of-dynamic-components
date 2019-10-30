import { Component } from '@angular/core';
import { DynamicComponent } from '../dynamic-content/dynamic-content-extendable';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent extends DynamicComponent {

}
