import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('', ( req: Request, res: Response ) => {
    return res.status( 200 ).json({ status: 200, data: 'Item that is working' })
});

export {
    router,
}