import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseContract } from '@model/dto/ResponseContract';
import { ContractDto } from '@model/dto/ContractDto';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  private readonly contractsEndpoint = 'http://localhost:8080/api/get-contracts';
  private readonly createContractEndpoint = 'http://localhost:8080/api/create-contract';
  private readonly downloadContractEndpoint = 'http://localhost:8080/api/download-contract/{id}';

  constructor(private readonly http: HttpClient) { }

  getContracts(page: number, size: number): Observable<ResponseContract> {
    return this.http.get<ResponseContract>(this.contractsEndpoint + `?page=${page}&size=${size}`);
  }

  createContract(data: ContractDto): Observable<ResponseContract> {
    let options = { headers: { 'Content-Type': 'application/json' } };
    const request = JSON.stringify(data);
    return this.http.post<ResponseContract>(this.createContractEndpoint, request, options);
  }

  downloadContract(id: any): Observable<Blob> {
    return this.http.get(this.downloadContractEndpoint.replace("{id}", id.toString()), { responseType: 'blob' });
  }
}
