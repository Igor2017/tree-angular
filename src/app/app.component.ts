import { Component } from '@angular/core';
import { clearSelectionOfTree, data, toggle, Value } from '.';
import { EventData } from 'tree-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = data as any
  selectedId: number | null = null

  ontoggle(eventData: EventData<Value>) {
    toggle(eventData)
  }
  onchange(eventData: EventData<Value>) {
    this.selectedId = eventData.data.state.selected ? null : eventData.data.value!.id
    if (!eventData.data.state.selected) {
      for (const child of this.data) {
        clearSelectionOfTree(child)
      }
    }
    eventData.data.state.selected = !eventData.data.state.selected
  }

}
