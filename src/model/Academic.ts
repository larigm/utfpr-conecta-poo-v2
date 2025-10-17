import { User } from "./User";
import { CourseEnum } from "./CourseEnum";

export class Academic extends User {

    constructor(id: number, email: string, nome: string, public matricula: number, public course: CourseEnum){ //diminuir construtores, usar get e set
        super(id, nome, email)
    }    
}