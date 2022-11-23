import { Response } from "express";
import { IFailedResponse } from "../interface/iResponses";

export const handleHttp = ( status: number, res: Response, message: string, error: any  ): Response<IFailedResponse> => {
    return res.status( status ).json({ message: message, error: error });
}