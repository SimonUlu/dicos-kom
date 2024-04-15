import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public firebaseService: Firestore) { }

  async getAllCustomers() {
    const customerCollection = collection(this.firebaseService, 'customers');

    const snapshot = await getDocs(customerCollection);

    const customerList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return customerList;
  }

  async createNewCustomer() {
    
  }
}
