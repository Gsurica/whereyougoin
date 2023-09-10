import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { WhereService } from 'src/services/where.service';

@Controller("where")
export class WhereController {
    constructor(private readonly _whereService: WhereService) { }

    @Post("goin")
    async wherePosting(@Body() data: any) {
        // try {
        //     const result = (await this._whereService.postGPTPrompt(data.message, data.login));
        //     if (result.Data.chatResult === undefined || result.Data.chatResult === null) {
        //         throw new BadRequestException(result.Message);
        //     }

        //     return {
        //         Ok: result.ErrorCode,
        //         OkMessage: result.Message,
        //         GPTResponse: result.Data.chatResult.message,
        //         login: result.Data.login
        //     }
        // } catch(e) {
        //     throw new Error(e);
        // }
    }
}


