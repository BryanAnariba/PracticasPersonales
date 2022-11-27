import { IWorkout } from "../interface/IWorkout";
import { WorkOutModel } from "../models/Workout"

export const getAllWorkOuts = async ( userId: string ): Promise<IWorkout[]> => {
    return WorkOutModel.find({ userId: userId });
}

export const getOneWorkOut = async ( workOutId: string ): Promise<IWorkout | null> => {
    return await WorkOutModel.findById( workOutId );
}

export const createWorkOut = async ( workOut: IWorkout ): Promise<IWorkout> => {
    return await WorkOutModel.create( workOut );
}

export const deleteWorkOut = async ( workOutId: string ) => {
    return await WorkOutModel.findOneAndDelete({ _id: workOutId });
}