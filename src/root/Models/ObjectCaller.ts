
class IResult {
    message: string;
}

interface IObjectCaller {
    chatResult: IResult;
    login: string;
}

export class ObjectCaller implements IObjectCaller {
    chatResult: IResult;
    login: string;
}