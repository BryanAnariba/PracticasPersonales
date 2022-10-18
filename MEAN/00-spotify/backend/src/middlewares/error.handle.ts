import { Response } from "express";

const handleHttp = ( res: Response, error: string, ex: any ) => {
    return res.status( 500 ).json({ error: error, message: ex });
}

export {
    handleHttp,
}