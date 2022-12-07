import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface IRequestExtend extends Request {
    user?: JwtPayload | { uid: number };
}