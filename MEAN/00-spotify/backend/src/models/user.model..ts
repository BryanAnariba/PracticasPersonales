import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: [ true, 'Nombre Usuario is required' ]
    },
    playlists: {
        type: Array
    }
},{
    versionKey: false,
    timestamps: true
});

const userModel = model<IUser>( 'users', userSchema );

export {
    userModel as UserModel
};