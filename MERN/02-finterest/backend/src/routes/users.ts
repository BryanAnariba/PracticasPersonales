import { Router } from "express";
import { login, register } from "../controllers/User";

const router: Router = Router();

/*
    JSON REGISTER
    {
        "firstName": "Test Name 3",
        "lastName": "Test Last Name 3",
        "userEmail": "test3@gmail.com",
        "userPassword": "@Asd.456"
    }
*/
router.post( '/register', register );
/*
    JSON LOGIN
    {
        "userEmail": "test3@gmail.com",
        "userPassword": "@Asd.456"
    }
*/
router.post( '/login', login );
export {
    router
}