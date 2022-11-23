import { Schema, model } from "mongoose";
import { IWorkout } from "../interface/IWorkout";

const workOutSchema = new Schema<IWorkout>({
    userId: {
        type: String,
        default: '',
    },
    title: {
        type: String, 
        required: [ true, 'Title is required' ],
    },
    reps: {
        type: Number,
        required: [ true, 'Reps is required' ],
    },
    load: {
        type: Number,
        required: [ true, 'Load is required' ],
    },
},{
    timestamps: true,
    versionKey: false,
});

const workOutModel =  model<IWorkout>( 'Workout', workOutSchema );

export {
    workOutModel as WorkOutModel
}