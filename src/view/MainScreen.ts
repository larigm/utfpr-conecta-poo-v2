const promptSync = require('prompt-sync');
import { EventController } from '../controller/EventController';
import { RegisterController } from '../controller/RegisterController';
import { Academic } from "../model/Academic";
import { CourseEnum } from "../model/CourseEnum";

export class MainView {
    private prompt = promptSync();
    private eventController: EventController;
    private registerController: RegisterController;
    private academics: Academic[] = [];

    constructor() {
         this.eventController = new EventController();
         this.registerController = new RegisterController(this.eventController);
    }
    private criarEvento(): void{
        console.log("Criar novo evento");
        const titulo = this.prompt("Título do evento: ");
        const data = this.prompt("Data do evento (DD-MM-AAAA): ");
        const local = this.prompt("Local do evento: ");
        const cursos = [CourseEnum.SI];

        const dadosNewEvent = {
            titulo: titulo,
            data: data,
            local: local,
            cursos: [CourseEnum.SI]
        };
        this.eventController.criarEvento(dadosNewEvent);
        console.log("Evento criado.");
    }
    public start(): void {
        while(true){
            console.log("1- Criar Evento, 2- Listar Eventos, 3- Sair");
            const opcao = this.prompt("Escolha uma opção: ");
            switch(opcao){
                case '1':
                    this.criarEvento();
                    break;
                case '2':
                    console.log("Listar eventos...");
                    break;
                case '3':
                    return
            }
        } 
    }
}