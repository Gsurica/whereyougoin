import { Result } from "../Data/Result";

export interface IService<ReturnType, ParamType> {
    execute(U: ParamType): Promise<Result<ReturnType>>
}