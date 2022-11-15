import { Schema, model } from "mongoose";
import { IUser } from '../interface/IUser';

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: [ true, 'First Name is Required' ],
        trim: true
    },
    lastName: {
        type: String,
        required: [ true, 'Last Name is Required' ],
        trim: true
    },
    email: {
        type: String,
        required: [ true, 'Email is Required' ],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [ true, 'Password is Required' ],
        trim: true
    }
},{
    timestamps: true,
    versionKey: false,
});

const UserModel = model<IUser>( 'User', userSchema );

export {
    UserModel
};
