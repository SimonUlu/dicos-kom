import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, addDoc, doc, deleteDoc } from '@angular/fire/firestore';
import { Customer } from '../helpers/Customer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private customerList = new BehaviorSubject<Customer[]>([]);

  constructor(public firebaseService: Firestore) { }

  async loadCustomers() {
    const customerCollection = collection(this.firebaseService, 'customers');
    const snapshot = await getDocs(customerCollection);
    const customerList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    this.customerList.next(customerList);
  }
  get customerList$() {
    return this.customerList.asObservable();
  }

  
  async createNewCustomer(customer: Customer) {
    console.log(customer);

    try {
      const customerCollection = collection(this.firebaseService, "customers");
      await addDoc(customerCollection, customer)
    } catch (error) {
      console.error("Error adding document: ", error);
    }

  }

  async deleteCustomer(id: string) {
    console.log(id);

    const customer = doc(this.firebaseService, "customers", id);

    try {
      await deleteDoc(customer)
    } catch(error) {
      console.log(error);
    }

  }
}
