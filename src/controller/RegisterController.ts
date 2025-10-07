import { User } from "../model/User";
import { Academic } from "../model/Academic";
import { Register } from '../model/Register';
import { Event } from '../model/Event';
import { EventController } from './EventController';
import { CourseEnum } from '../model/CourseEnum';

export class RegisterController {
    private registers: Register[] = [];
    private eventController: EventController;

    constructor(eventController: EventController) {
        this.eventController = eventController;
    }

    public inscreverUsuario(eventId: number, user: User): boolean {
        const evento = this.eventController.findEvent(eventId);
        if (!evento) {
            return false;
        }

        const jaInscrito = evento.participantes.find(p => p.id === user.id);
        if (jaInscrito) {
            return false;
        }

        // A CORREÇÃO ESTÁ AQUI:
        if (user instanceof Academic && evento.cursos.length > 0) {
            // Usamos 'user.curso' em vez de 'user.CourseEnum'
            if (!evento.cursos.includes(user.course)) {
                return false;
            }
        }

        evento.adicionarParticipante(user);
        this.registers.push(new Register(user, evento));
        return true;
    }
}