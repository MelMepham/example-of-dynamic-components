import { Component } from '@angular/core';
import {DynamicComponent} from '../dynamic-content/dynamic-content-extendable';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent extends DynamicComponent {


}
