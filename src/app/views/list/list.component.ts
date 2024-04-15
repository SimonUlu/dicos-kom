import { Component, OnDestroy, OnInit } from '@angular/core';
import { StandardListComponent } from '../../components/general/lists/standard-list/standard-list.component';
import { CrudService } from '../../services/crud.service';
import { Customer } from '../../helpers/Customer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [StandardListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  customerList: Customer[] = [];

  customerListHeader = ["Kundenname", "Kategorie", "Ort", "Postleitzahl", "Kunde seit"];

  constructor(private firebaseService: CrudService) {}

  async ngOnInit() {
    this.firebaseService.loadCustomers();
    this.subscription.add(this.firebaseService.customerList$.subscribe(customers => {
      this.customerList = customers;
    }));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
