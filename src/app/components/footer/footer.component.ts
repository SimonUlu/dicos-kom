import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Dicos Kommunikationssysteme</strong> by <a href="https://jgthms.com">Simon Unterlugauer</a>.
          Source code is licensed by xxx
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed by
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >yyy</a
          >.
        </p>
      </div>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

}
