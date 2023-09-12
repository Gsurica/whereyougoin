import { Get, Controller, Param, BadRequestException } from '@nestjs/common';
import { SearchForCEPService } from 'src/services/SearchForCEP.service';

@Controller("where")
export class SearchForCEPController {
    
    constructor(private readonly _searchForCEPService: SearchForCEPService) {}

    @Get('/:sign/:city/:country')
    async execute(
        @Param('sign') sign: string,
        @Param('city') city: string,
        @Param('country') country: string,
    ) {
        const result = await this._searchForCEPService.execute({ sign, cityName: city, countryName: country });
        
        if (result.type === "ERROR") {
            throw new BadRequestException({
                message: result.message,
                code: result.code,
                type: result.type
            })
        }
        
        return {
            status: 200,
            message: "Endereço retornado com sucesso!",
            data: result.data
        }
    }
}