import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`
    h1 { color: red }
  `],
})
export class Chap3Component {
  title = 'My First Angular App';
}

@Component({
  selector: 'info-blurb',
  template: `
    <p>This is just a test</p>
  `,
  styles: [`
    p {color: green}
  `],
})

export class InfoBlurb {
  title = 'Informational blurb'
}

@Component({
  selector: 'todays-date',
  template: `
    <p>Today's date is {{today}}.</p>
  `,
  styles: [`
    p {color: blue}
  `],
})

export class TodaysDate {
  title: 'Today\'s date';
  today: Date;
  constructor() {
    this.today = new Date();
  }
}
