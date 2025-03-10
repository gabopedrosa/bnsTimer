import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  template: `
    <p>This application allows you to manage multiple timers for different channels.</p>
    <p>Here's how you can use it:</p>
    <ul>
      <li>Each channel has a timer that can be set.</li>
      <li>To start the timer, simply click on the <b>Normal/Mutated</b> button.</li>
      <li>The timer will count down and notify you with an alert sound once the time is up.</li>
      <li> Make sure to click only after killing one, as the spawn <b>timer begins only after the boss's death</b>.</li>
    </ul>
  
    <p>Once you defeat a Golden Deva boss, select the type of boss you just killed (Normal or Mutated).</p>
    <ul>
      <li><strong>Normal Boss</strong>: The timer will start counting down from 5 minutes, indicating the time remaining until the next spawn.</li>
      <li><strong>Mutated Boss</strong>: The timer for the Mutated boss will begin a countdown of 8 minutes, indicating the time remaining until the next spawn.</li>
    </ul>
  `,
})
export class GuideComponent {}
