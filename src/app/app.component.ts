import { Component } from '@angular/core';

@Component({ //metadata đính kèm với một decorator
  selector: 'app-root',
  templateUrl: './app.component.html', //template
  styleUrls: ['./app.component.css']
})
export class AppComponent { //class
  title = 'test';
}
