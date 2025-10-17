import { Event } from '../model/Event';
import { CourseEnum } from "../model/CourseEnum";

export interface dadosEvento {
  titulo: string;
  data: string;
  local: string;
  cursos: CourseEnum[]; //criar fora a interface
}
export class EventController {
    private eventList: Event[] = [];
    private idEvent: number = 1;

    public criarEvento(dados: dadosEvento): Event{
        const newEvent = new Event(this.idEvent, dados.local, dados.data, dados.local);

        for(let courses of dados.cursos){
            newEvent.adicionarCurso(courses);
        }
        this.idEvent++;
        this.eventList.push(newEvent);
        return newEvent;
    }
    public findEvent(id: number): Event | undefined{
    for (let event of this.eventList) {
    if (event.id === id) {
      return event;
    }
  }
  return undefined;
}
}