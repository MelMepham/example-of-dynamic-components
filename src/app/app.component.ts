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
        type: 'sampleOne',
        text: 'hello I am sample one component'
      },
      {
        type: 'sampleTwo',
        text: 'hello I am sample two component'
      },
      {
        type: 'sampleOne',
        text: 'hello I am again sample one component but with some more info'
      }
    ]
}
