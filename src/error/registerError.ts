export class registerError extends Error {
    constructor(message: string){
        super(message);
        this.name = this.constructor.name;
     }
}

export class notFound extends registerError {
    constructor(){
        super("Erro de inscrição: Evento não encontrado");
    }
}

export class isRegister extends registerError{
    constructor(){
        super("Usuario já inscrito");
    }
}

export class noCurse extends registerError{
    constructor(){
        super("Usuario não permitido no evento");
    }
}