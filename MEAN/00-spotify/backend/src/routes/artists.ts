import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get( '', ( req: Request, res: Response ) => {
    res.status( 200 ).json( { status: 200, data: 'artists is working' } );
    
});

export {
    router
}