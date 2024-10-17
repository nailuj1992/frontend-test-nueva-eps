import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContractDto } from '@model/dto/ContractDto';
import { FileDto } from '@model/dto/FileDto';
import { ContractsService } from '@services/contracts.service';

@Component({
  selector: 'app-create-contract',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: 'create-contract.component.html',
  styleUrl: 'create-contract.component.css'
})
export class CreateContractComponent {

  selectedFile: File | null = null;

  submitForm = this.formBuilder.group({
    modality: new FormControl('', Validators.required),
    consecutiveNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/)
    ]),
    regimen: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required)
  });

  constructor(private readonly formBuilder: FormBuilder, private readonly router: Router, private readonly contractsService: ContractsService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log('File uploaded');
  }

  async onSubmit() {
    if (this.submitForm.valid && this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);// Read the file as Base64

      let fileBase64 = await this.readFileAsBase64(this.selectedFile);
      if (!fileBase64) {
        return;
      }

      let formData = this.submitForm.value;

      let request = new ContractDto();
      request.modality = formData.modality;
      request.consecutiveNumber = Number(formData.consecutiveNumber);
      request.regimen = formData.regimen;

      let file = new FileDto();
      file.name = this.selectedFile.name;
      file.type = this.selectedFile.type;
      file.data = fileBase64;
      request.file = file;

      this.contractsService.createContract(request).subscribe(
        (response) => {
          if (response.code === 200) {
            this.router.navigate(['contracts']);
          }
        },
        (error) => {
          console.error('Error creating contract', error);
        }
      );
    }
  }

  readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileBase64 = (reader.result as string).split(',')[1];
        console.log('File read successfully');
        resolve(fileBase64);
      };

      reader.onerror = (error) => {
        reject(new Error('File could not be read'));
      };

      reader.readAsDataURL(file);  // Start reading the file
    });
  }

}
