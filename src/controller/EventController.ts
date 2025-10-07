import { Event } from '../model/Event';
import { CourseEnum } from "../model/CourseEnum";

export class EventController {
    private eventList: Event[] = [];
    private idEvent: number = 1;

    public criarEvento(titulo: string, data: string, local: string, course: CourseEnum[]): Event{
        const newEvent = new Event(this.idEvent, titulo, data, local);

        for(let courses of course){
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