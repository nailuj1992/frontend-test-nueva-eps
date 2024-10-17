import { Routes } from '@angular/router';
import { ContractsComponent } from '@components/contracts/contracts.component';
import { CreateContractComponent } from '@components/create-contract/create-contract.component';
import { HomeComponent } from '@components/home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create-contract', component: CreateContractComponent },
    { path: 'contracts', component: ContractsComponent },
];
