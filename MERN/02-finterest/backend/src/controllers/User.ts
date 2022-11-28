import { Request, Response } from "express";

export const register = async ( req: Request, res: Response ) => {
    return res.status( 201 ).json({ status: 201, data: 'created' })
}