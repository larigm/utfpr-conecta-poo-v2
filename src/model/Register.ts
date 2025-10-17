import { User } from "./User";
import { Event } from "./Event";

export class Register{

    private user: User;
    private evento: Event;
    constructor(private user: User, private event: Event){
        this.user = user;
        this.event = event
    }
    getUser(): User{
        return this.user;
    }
    getEvent(): Event{
        return this.event;
    }
}
//fazer get e set