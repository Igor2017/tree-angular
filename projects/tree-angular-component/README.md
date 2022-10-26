# TreeAngularComponent

## What is this component for?

Allows you to use [tree-component](https://github.com/plantain-00/tree-component) in Angular apps.
I consider this component the best tree for Angular at the moment.

## :clapper: Usage

Installation:

`npm i @igor2017/tree-angular-component`

the "tree-component" package will be installed automatically

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from 'tree-angular-component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```html
<tree [data]="data"
    (toggle)="toggle($event)"
    (change)="change($event)">
</tree>
```

Documentation and usage examples here: https://github.com/plantain-00/tree-component.
