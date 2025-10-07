import { User } from "./User";
import { Event } from "./Event";

export class Register{
    constructor(private user: User, private event: Event){

    }
    getUser(): User{
        return this.user;
    }
    getEvent(): Event{
        return this.event;
    }
}