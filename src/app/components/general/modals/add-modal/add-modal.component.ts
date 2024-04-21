import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../../../helpers/Customer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { CrudService } from '../../../../services/crud.service';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="modal" [class.is-active]="isOpen">
        <div class="modal-background"></div>
        <div class="modal-content has-background-white px-4 py-6">
          <p class="title is-3">{{headline}}</p>
          <p class="subtitle is-5">{{subHeadline}}</p>
          <form [formGroup]="customerForm" (ngSubmit)="submitorm()">
            <div class="field" *ngFor="let field of customerFields">
              <label class="label">{{field.label}}</label>
              <div class="control">
                <input class="input" type="text" [formControlName]="field.name" [placeholder]="field.placeholder">
              </div>
            </div>
            <button class="button is-primary" type="submit">Submit</button>
          </form>
        </div>
        <button (click)="closeModal()" class="modal-close is-large" aria-label="close"></button>
      </div>
  `,
  styles: ``
})
export class AddModalComponent {

  @Input() isOpen:boolean = false;
  @Input() headline: string = "";
  @Input() subHeadline: string = "";
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() addNewCustomer = new EventEmitter<void>();


  customerForm: FormGroup;
  customerFields = [
    { name: 'id', label: 'ID', placeholder: 'Enter ID' },
    { name: 'customer_since', label: 'Customer Since', placeholder: 'Enter Customer Since' },
    { name: 'category', label: 'Category', placeholder: 'Enter Category' },
    { name: 'kunde', label: 'Kunde', placeholder: 'Enter Kunde' },
    { name: 'city', label: 'City', placeholder: 'Enter City' },
    { name: 'zip_code', label: 'Zip Code', placeholder: 'Enter Zip Code' }
  ];

  constructor(private fb: FormBuilder, private firebaseService: CrudService){
    const generatedId = uuidv4(); 
    this.customerForm = this.fb.group({
      id: [{value: generatedId, disabled: true}, Validators.required],
      customer_since: ['', Validators.required],
      category: ['', Validators.required],
      kunde: ['', Validators.required],
      city: ['', Validators.required],
      zip_code: ['', Validators.required],
    });
  }


  closeModal() {
    this.closeModalEvent.emit();
  }

  submitorm() {
    if (this.customerForm?.valid) {

      const customerData: Customer = this.customerForm.value;
      this.firebaseService.createNewCustomer(customerData);
      this.closeModal();
    }

    this.addNewCustomer.emit();
    this.resetForm();
  }

  private resetForm() {
    const newId = uuidv4();

    this.customerForm.reset({
      id: newId,
      customer_since: "",
      category: "",
      kunde: "",
      city: "",
      zip_code: "",
    });

    this.customerForm.get('id')?.setValue(newId);

  }

}
