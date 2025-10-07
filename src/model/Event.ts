import { User } from "./User";
import { CourseEnum } from "./CourseEnum";
export class Event {
     participantes: User[] = []
     cursos: CourseEnum[] = []
     constructor(public id: number, public titulo: string, public data: string, public local: string){
    
    }

    public adicionarParticipante(usuario: User): void{
        this.participantes.push(usuario);
    }
    public adicionarCurso(course: CourseEnum): void{
        this.cursos.push(course);
    }
}