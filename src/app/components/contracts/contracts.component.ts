import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { ContractsService } from '@services/contracts.service';
import { FileDto } from '@model/dto/FileDto';
import { ContractDto } from '@model/dto/ContractDto';

@Component({
  selector: 'app-contracts',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: 'contracts.component.html',
  styleUrl: 'contracts.component.css'
})
export class ContractsComponent {

  data: ContractDto[] | null | undefined = null;
  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 10;

  constructor(private readonly contractsService: ContractsService) {
    this.getContracts();
  }

  getContracts() {
    this.contractsService.getContracts(this.currentPage, this.pageSize).subscribe(
      (response) => {
        if (response.code === 200) {
          this.data = response.contracts?.content;
          this.totalPages = response.contracts?.totalPages;
        }
      },
      (error) => {
        console.error('Error getting contracts', error);
      }
    );
  }

  nextPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.currentPage++;
      this.getContracts();
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getContracts();
    }
  }

  downloadFile(file: FileDto) {
    if (!file) {
      return;
    }
    this.contractsService.downloadContract(file.id).subscribe({
      next: (blob) => {
        // Create a download link dynamically
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${file.name}`;  // You can customize the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);  // Clean up
      },
      error: (error) => {
        console.error('Error downloading contract', error);
      }
    });
  }

}
