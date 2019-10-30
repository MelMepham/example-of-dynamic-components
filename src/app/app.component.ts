import { Component } from '@angular/core';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    public sections = [
      {
        type: 'sampleOne'
      },
      {
        type: 'sampleTwo'
      },
      {
        type: 'sampleOne'
      }
    ],
}
