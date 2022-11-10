import { Router } from "express";
import { loginUser, registerUser } from "../controllers/User";

const router: Router = Router();

router.post( '/signup', registerUser );
router.post( '/signin', loginUser );

export {
    router,
};