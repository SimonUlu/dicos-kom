import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"angular-kanban-7f690","appId":"1:872224471299:web:ac70f515d63b262e695136","storageBucket":"angular-kanban-7f690.appspot.com","apiKey":"AIzaSyBzdcYOmp9o5cyo3hsusKcuzUKbVa71Eag","authDomain":"angular-kanban-7f690.firebaseapp.com","messagingSenderId":"872224471299","measurementId":"G-VLKJLWCDDB"}))), 
    importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
