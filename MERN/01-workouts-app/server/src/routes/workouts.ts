import { Router } from "express";
import { createOne, deleteOne, get, getOne } from "../controllers/Workout";
import { checkJWT } from "../middlewares/token.validation";

const router: Router = Router();

router.get( '', [ checkJWT ], get );
router.get( '/:workoutId', [ checkJWT ], getOne );
router.post( '', [ checkJWT ], createOne );
router.delete( '/:workoutId', [ checkJWT ], deleteOne );

export {
    router,
}

