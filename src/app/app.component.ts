import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <h1>Inline Template</h1>
          <fa-other></fa-other>
          <fa-another>
            <div>
                <h1>Hello</h1>
                <h2>World!</h2>
            </div>
          </fa-another>
          <fa-databinding></fa-databinding>
          `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
}
