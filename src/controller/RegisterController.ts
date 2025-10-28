import { Register } from "../model/Register";
import { User } from "../model/User";
import { EventController } from "./EventController";


export class RegisterController {
    private registers: Register[] = [];
    private eventController: EventController;

    constructor(eventController: EventController){
        this.eventController = eventController; //injeção de dependencia
    }
}
    const eventController = new EventController();
    const registerController = new RegisterController(EventController);

    public registerUser(eventId: number, user: User): boolean{
        const evento = this.eventController.findEvent(eventId);
        if (!evento) {
            return false;

    }