import { connect } from "mongoose";

const connectMe = async () => {
    return await connect(`${ process.env.MONGO_URI }` );
}

export {
    connectMe
}