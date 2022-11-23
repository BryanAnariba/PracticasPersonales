import { Router } from "express";
import { createOne, get, getOne } from "../controllers/Workout";

const router: Router = Router();

router.get( '', get );
router.get( '/:workoutId', getOne );
router.post( '', createOne );
router.put( '/:workoutId', );
router.delete( '/:workoutId', );

export {
    router,
}

