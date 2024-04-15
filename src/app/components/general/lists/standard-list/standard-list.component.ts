import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AddModalComponent } from '../../modals/add-modal/add-modal.component';
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-standard-list',
  standalone: true,
  imports: [CommonModule, SharedModule, AddModalComponent],
  template: `
  <div class="table-container is-flex-desktop is-justify-content-center is-flex-direction-column">
      <app-add-modal 
        [isOpen]="modalOpened" 
        (closeModalEvent)="toggleModal()"
        (addNewCustomer)="reloadComponent()"
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
            <th>Aktion</th>
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
            <td>
              <button class="button is-rounded-full">
                <span class="icon has-text-danger" (click)="deleteCustomer(item.id)">
                  <fa-icon [icon]="faTimes"></fa-icon>
                </span>
              </button>
            </td>
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

  @Output() reloadComponentEmitter = new EventEmitter<void>();

  constructor(private firebaseService: CrudService) {}

  modalOpened = false;
  faPlus = faPlus;
  faTimes = faTimes;

  deleteCustomer(id: string) {
    this.firebaseService.deleteCustomer(id);
    this.reloadComponent();

  }


  toggleModal() {
    this.modalOpened = !this.modalOpened;
    console.log(this.modalOpened);
  }

  reloadComponent() {
    this.reloadComponentEmitter.emit();
  }
}
