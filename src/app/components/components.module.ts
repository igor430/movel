import { NgModule } from '@angular/core';
import { ExampleComponent } from './example/example.component';

@NgModule({
    declarations: [  ExampleComponent],
    exports: [ ExampleComponent]
})

export class ComponentsModule{}