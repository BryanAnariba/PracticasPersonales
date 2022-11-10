import { Response } from "express";

export const handleHttp = ( status: number, res: Response, message: string, error: any  ) => {
    return res.status( status ).json({ message: message, error: error });
}