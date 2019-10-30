import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef
} from '@angular/core';

import {OneComponent} from '../one/one.component';
import {TwoComponent} from '../two/two.component';
import {DynamicComponent} from './dynamic-content-extendable';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input() type: string;

  @Input() context: any;

  private mappings = {
    'sampleOne': OneComponent,
    'sampleTwo': TwoComponent
  };

  private componentRef: ComponentRef<{}>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  getComponentType(typeName: string) {
    const type = this.mappings[typeName];
    return type;
  }

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);

      console.log(componentType);
      // note: componentType must be declared within module.entryComponents
      const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      // set component context
      const instance = <DynamicComponent> this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}


