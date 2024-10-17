import { ContractDto } from "@model/dto/ContractDto";

export class ResponseContract {

    code: number | null | undefined;
    description: string | null | undefined;
    contracts: PaginationDto | null | undefined;

    constructor(code?: number, description?: string, contracts?: PaginationDto) {
        this.code = code;
        this.description = description;
        this.contracts = contracts;
    }

}

export class PaginationDto {
    pageable: any;
    content: ContractDto[] | null | undefined;
    last: any;
    totalPages: any;
    totalElements: any;
    number: any;
    sort: any;
    numberOfElements: any;
    first: any;
    size: any;
    empty: any;

    constructor(pageable?: any, content?: ContractDto[], last?: any, totalPages?: any, totalElements?: any, number?: any, sort?: any, numberOfElements?: any, first?: any, size?: any, empty?: any) {
        this.pageable = pageable;
        this.content = content;
        this.last = last;
        this.totalPages = totalPages;
        this.totalElements = totalElements;
        this.number = number;
        this.sort = sort;
        this.numberOfElements = numberOfElements;
        this.first = first;
        this.size = size;
        this.empty = empty;
    }
}