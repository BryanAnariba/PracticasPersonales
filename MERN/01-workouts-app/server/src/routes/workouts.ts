import { Router } from "express";
import { createOne, deleteOne, get, getOne } from "../controllers/Workout";

const router: Router = Router();

router.get( '', get );
router.get( '/:workoutId', getOne );
router.post( '', createOne );
router.put( '/:workoutId', );
router.delete( '/:workoutId', deleteOne );

export {
    router,
}

