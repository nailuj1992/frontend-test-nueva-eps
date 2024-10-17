export class FileDto {

    id: number | null | undefined;
    name: string | null | undefined;
    type: string | null | undefined;
    data: string | null | undefined;

    constructor(id?: number, name?: string, type?: string, data?: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.data = data;
    }

}
