import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Dicos Kommunikationssysteme</strong> by <a href="#">Simon Unterlugauer</a>
        </p>
      </div>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

}
