import { Response } from "express"; 

export const ResponseWarpper = (res: Response, data: any, status = 200, message = "요청을 성공적으로 실행했습니다") => {
    return res.status(status).json({ data, message, status });
}