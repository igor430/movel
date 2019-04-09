import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
    declarations: [ MenuComponent, ExampleComponent],
    exports: [ MenuComponent, ExampleComponent]
})

export class ComponentsModule{}