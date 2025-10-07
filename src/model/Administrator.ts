import { User } from "./User";

export class Administrator extends User{
    constructor(id: number, nome: string, email: string){
        super(id, nome, email)
    }
}