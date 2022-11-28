import { Router } from "express";
import { register } from "../controllers/User";

const router: Router = Router();

router.post( '/register', register );

export {
    router
}