import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { ScaleFontSizeDirective } from '../directives/scale-font-size.directive';
import { ServiceDemoComponent } from './service-demo/service-demo.component';

import { LocalStorageService } from '../services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DirectiveDemoComponent,
    ScaleFontSizeDirective,
    ServiceDemoComponent
    ],
  providers: [],
  exports: [
    DirectiveDemoComponent,
    ServiceDemoComponent
  ]
})
export class ComponentsModule { }
