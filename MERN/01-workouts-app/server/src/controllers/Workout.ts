import { Request, Response } from "express";
import { IOkResponse } from "../interface/iResponses";
import { IWorkout } from "../interface/IWorkout";
import { createWorkOut, getAllWorkOuts, getOneWorkOut } from "../services/workout.service";
import { handleHttp } from "../utils/error.handle";

export const get = async ( req: Request, res: Response ): Promise<Response | IOkResponse> => {
    try {
        const workOuts: IWorkout[] = await getAllWorkOuts();
        if ( workOuts.length === 0 ) {
            //return res.status( 200 ).json({ status: 200, data: 'Work Outs Not Found' });
            return res.status( 200 ).json({ status: 200, data: [] });
        } else {
            return res.status( 200 ).json({ status: 200, data: workOuts });
        }
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_WORKOUT_ERROR', error );
    }
}

export const getOne = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        let { workoutId } = req.params;
        const workOut: IWorkout | null = await getOneWorkOut( workoutId );
        if ( !workoutId ) {
            //return res.status( 200 ).json({ status: 200, data: 'Work Out Not Found' });
            return res.status( 200 ).json({ status: 200, data: [] });
        } else {
            return res.status( 200 ).json({ status: 200, data: workOut });
        }
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_WORKOUT_ERROR', error );
    }
}

export const createOne = async ( req: Request, res: Response ): Promise<Response | IOkResponse> => {
    const { title, load, reps }: IWorkout = req.body;
    try {
        const workOutResponse: IWorkout = await createWorkOut({ title, load, reps });
        return res.status( 201 ).json({ 
            status: 201,
            data: workOutResponse,
        });
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_WORKOUT_ERROR', error );
    }
}

export const editOne = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        return res.status( 200 ).json({ status: 200, data: 'That is workin' });
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_WORKOUT_ERROR', error );
    }
}

const deleteOne = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        return res.status( 200 ).json({ status: 200, data: 'That is workin' });
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_WORKOUT_ERROR', error );
    }
}