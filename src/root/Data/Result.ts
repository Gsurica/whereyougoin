export class Result<T> {
    public message: string;
    public type: "SUCCESS" | "ERROR";
    public data: T;
    public code: number;

    constructor(code: number, message: string, data: T, type: "SUCCESS" | "ERROR") {
        this.code = code;
        this.message = message;
        this.data = data;
        this.type = type;
    }

    public static Success<T>(
        code: number,
        message: string,
        data: T,
        type: "SUCCESS" | "ERROR"
    ): Result<T> {
        return new Result<T>(code, message, data, "SUCCESS")
    }

    public static Fail<T>(code: number, message: string): Result<T> {
        return new Result<T>(code, message, null, "ERROR")
    }
}