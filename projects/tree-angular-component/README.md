# TreeAngularComponent

## :clapper: Usage

Installation:

`npm i @igor2017/tree-angular-component`

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
