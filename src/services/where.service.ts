import { Injectable } from "@nestjs/common";
import OpenAI from "openai";
import { ObjectCaller } from "src/root/Models/ObjectCaller";

@Injectable()
export class WhereService {
    async postGPTPrompt(
        message: string,
        login: string
    ) {

        // let object: ObjectCaller = new ObjectCaller();

        // const chat = await openai.chat.completions.create({
        //     model: 'gpt-3.5-turbo',
        //     messages: [{ role: 'user', content: message }]
        // });

        // if (message === undefined || message === null) {
        //     return new Result<ObjectCaller>(
        //         object,
        //         400,
        //         "Erro ao procurar mensagem!",
        //         "ERROR"
        //     )        
        // }

        // if (login === undefined || login === null) {
        //     return new Result<ObjectCaller>(
        //         object,
        //         400,
        //         "Erro ao procurar usuário!",
        //         "ERROR"
        //     )        
        // }
        
        // const result = chat.choices[0].message;
        // if (result == undefined || chat.choices.length <= 0) {
        //     return new Result<ObjectCaller>(
        //         object,
        //         400,
        //         "Erro ao receber mensagem",
        //         "ERROR"
        //     )        
        // }

        // object.chatResult.message = result.content;
        // object.login = result.role;

        // return new Result<ObjectCaller>(
        //     object,
        //     200,
        //     "Sucesso ao enviar tua rota!",
        //     "SUCCESS"
        // )  
    }
}