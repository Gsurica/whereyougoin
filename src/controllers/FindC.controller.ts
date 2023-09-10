import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { FindCService } from 'src/services/FindC.service';

@Controller("where")
export class FindCController {
    constructor(private readonly _findCService: FindCService) {}

    @Get("/:cep")
    async get(@Param('cep') cep: string) {
        const result = await this._findCService.execute({ CEP: cep });

        if (result.type === 'ERROR') {
            throw new BadRequestException({
                message: result.message,
                code: result.code,
                type: result.type
            })
        }

        return {
            message: result.message,
            type: result.type,
            data: result.data
        }
    }
}