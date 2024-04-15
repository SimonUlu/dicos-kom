import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddModalComponent } from '../../modals/add-modal/add-modal.component';

@Component({
  selector: 'app-standard-list',
  standalone: true,
  imports: [CommonModule, SharedModule, AddModalComponent],
  template: `
  <div class="table-container is-flex-desktop is-justify-content-center is-flex-direction-column">
      <app-add-modal 
        [isOpen]="modalOpened" 
        (closeModalEvent)="toggleModal()"
        headline="Kunden"
        subHeadline="Neuen Kunden hinzufügen"
      ></app-add-modal>
      <button (click)="toggleModal()" class="button is-success floating-button mb-2">
          <span class="icon is-small">
            <fa-icon [icon]="faPlus" [styles]="{'color': 'white'}"></fa-icon>
          </span>
      </button>
      <table class="table is-bordered">
        <thead>
          <tr>
            <th class="is-hidden-mobile"></th>
            <th *ngFor="let item of listHeaderItems">{{item}}</th>

          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of listItems">
            <td class="is-hidden-mobile">{{item.id}}</td>
            <td>{{item.kunde}}</td>
            <td>{{item.category}}</td>
            <td>{{item.city}}</td>
            <td>{{item.zip_code}}</td>
            <td>{{item.customer_since}}</td>
          </tr>
        </tbody>
      </table>
  </div>
  `,
  styles: `
  `
})
export class StandardListComponent {
  @Input() listItems: any[] = [];
  @Input() listHeaderItems: any[] = [];

  modalOpened = false;
  faPlus = faPlus;


  toggleModal() {
    this.modalOpened = !this.modalOpened;
    console.log(this.modalOpened);
  }
}
