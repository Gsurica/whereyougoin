import { Injectable } from '@nestjs/common';
import { CEPApi } from 'src/Infra/Api/Api';
import { IFindNeighborhoodDTO } from 'src/root/DTOs/CEPDTOs/IFindNeighborhoodDTO';
import { Result } from 'src/root/Data/Result';
import { IService } from 'src/root/interfaces/IService';

@Injectable()
export class SearchForCEPService implements IService<IFindNeighborhoodDTO, IFindNeighborhoodDTO> {
    async execute({
        cityName,
        countryName,
        sign
    }: IFindNeighborhoodDTO): Promise<Result<IFindNeighborhoodDTO>> {

        if (cityName === undefined || cityName.length <= 3) {
            return Result.Fail<IFindNeighborhoodDTO>(400, "Nome da cidade inválido!");
        }

        if (countryName === undefined || countryName.length <= 3) {
            return Result.Fail<IFindNeighborhoodDTO>(400, "Nome do logradouro inválido!");
        }

        if (sign === undefined || sign.length <= 1) {
            return Result.Fail<IFindNeighborhoodDTO>(400, "SIgla inválida!");
        }

        const request = await CEPApi.get<IFindNeighborhoodDTO>(`${sign}/${cityName}/${countryName}/json`);
        
        if (request.data === undefined || request.data === null) {
            return Result.Fail<IFindNeighborhoodDTO>(400, "Requisição inválida!");
        }

        return Result.Success<IFindNeighborhoodDTO>(200, "Endereço encontrado com sucesso!", request.data, "SUCCESS");

    }
}