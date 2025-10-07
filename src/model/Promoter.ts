import { User } from "./User";

export class Promoter extends User{
    constructor(id: number, nome: string, email: string){
        super(id, nome, email)
    }
}