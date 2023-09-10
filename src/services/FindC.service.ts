import { Injectable } from '@nestjs/common';
import { CEPApi } from 'src/Infra/Api/Api';
import { ICEP } from 'src/Infra/Types/ICep';
import { IFindCEPDTO } from 'src/root/DTOs/CEPDTOs/IFindCEPDTO';
import {  Result } from 'src/root/Data/Result';
import { IService } from 'src/root/interfaces/IService';

@Injectable()
export class FindCService implements IService<ICEP, IFindCEPDTO> {
    async execute({ CEP }: IFindCEPDTO): Promise<Result<ICEP>> {

        if (CEP === undefined || CEP === "") {
            return Result.Fail<ICEP>(400, "CEP INVÁLIDO!");      
        }

        if (CEP.length <= 3 || CEP.length > 8 || CEP.length < 8) {
            return Result.Fail<ICEP>(400, "CEP INVÁLIDO!");
        }

        const request = await CEPApi.get<ICEP>(`${CEP}/json/`);
        return Result.Success<ICEP>(200, "CEP ADQUIRIDO COM SUCESSO", request.data, "SUCCESS");
    }
}