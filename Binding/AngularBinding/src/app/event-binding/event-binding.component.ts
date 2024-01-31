import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  // onClick() {
  //   console.log('Button clicked!');
  // }

  // onMouseOver() {
  //   console.log('Mouse over event triggered!');
  // }

  // onKeyUp(event: any) {
  //   console.log('Key pressed:', event.target.value);
  // }

  // onClick(event: any) {
  //   console.log('Button clicked!', event);
  // }

  onLinkClick(event: any) {
    console.log('Link clicked!');
    event.preventDefault(); // Prevents the default behavior (e.g., navigating to a new page)
  }
}
