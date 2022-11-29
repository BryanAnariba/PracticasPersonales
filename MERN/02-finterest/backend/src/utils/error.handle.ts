import { Response } from 'express';

export const handleHttp = ( status: number, res: Response, error: string, e: any ): Response => {
    return res.status( status ).json({ error: error, message: e });
}