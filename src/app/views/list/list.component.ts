import { Component, OnInit } from '@angular/core';
import { StandardListComponent } from '../../components/general/lists/standard-list/standard-list.component';
import { CrudService } from '../../services/crud.service';
import { Customer } from '../../helpers/Customer';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [StandardListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  customerList: Customer[] = [];

  customerListHeader = ["Kundenname", "Kategorie", "Ort", "Postleitzahl", "Kunde seit"];

  constructor(private firebaseService: CrudService) {}

  async ngOnInit() {
    let customers = await this.firebaseService.getAllCustomers();
    console.log(customers);

    this.customerList = customers;
  }

}
