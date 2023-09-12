import { Injectable } from '@nestjs/common';
import { CEPApi } from 'src/Infra/Api/Api';
import { IFindNeighborhoodDTO } from 'src/root/DTOs/CEPDTOs/IFindNeighborhoodDTO';
import { Result } from 'src/root/Data/Result';
import { IService } from 'src/root/interfaces/IService';
import { MESSAGES_ADDRESS } from 'src/config/constants/Constants';

@Injectable()
export class SearchForCEPService implements IService<IFindNeighborhoodDTO, IFindNeighborhoodDTO> {
    async execute({
        cityName,
        streetName,
        sign
    }: IFindNeighborhoodDTO): Promise<Result<IFindNeighborhoodDTO>> {

        if (cityName === undefined || cityName.length <= 3) {
            return Result.Fail<IFindNeighborhoodDTO>(400, MESSAGES_ADDRESS.cityNameInvalid);
        }

        if (streetName === undefined || streetName.length <= 3) {
            return Result.Fail<IFindNeighborhoodDTO>(400, MESSAGES_ADDRESS.streetNameINvalid);
        }

        if (sign === undefined || sign.length <= 1) {
            return Result.Fail<IFindNeighborhoodDTO>(400, MESSAGES_ADDRESS.signInvalid);
        }

        const request = await CEPApi.get<IFindNeighborhoodDTO>(`${sign}/${cityName}/${streetName}/json`);
        
        if (request.data === undefined || request.data === null) {
            return Result.Fail<IFindNeighborhoodDTO>(400, MESSAGES_ADDRESS.generalRequisitionInvalid);
        }

        return Result.Success<IFindNeighborhoodDTO>(200, MESSAGES_ADDRESS.addressAcquireSuccess, request.data, "SUCCESS");

    }
}