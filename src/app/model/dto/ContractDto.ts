import { FileDto } from "@model/dto/FileDto";

export class ContractDto {

    id: number | null | undefined;
    modality: string | null | undefined;
    consecutiveNumber: number | null | undefined;
    regimen: string | null | undefined;
    creationDate: Date | null | undefined;
    file: FileDto | null | undefined;

    constructor(id?: number, modality?: string, consecutiveNumber?: number, regimen?: string, creationDate?: Date, file?: FileDto) {
        this.id = id;
        this.modality = modality;
        this.consecutiveNumber = consecutiveNumber;
        this.regimen = regimen;
        this.creationDate = creationDate;
        this.file = file;
    }

}
