import 'dotenv/config';
import 'colors';
import express, { Application } from 'express';
import cors from 'cors';
import { router } from './routes';

// Settings
const PORT: number | string = process.env.PORT || 3501;
const app: Application = express();
app.set( 'PORT', process.env.PORT );

// Middlewares
app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Routes
app.use( router )

// Static Files

// Start Server
app.listen( app.get( 'PORT' ), () => {
    //console.clear();
    console.log( `============================`.cyan );
    console.log( `Server started on port: ${ app.get( 'PORT' ) }`.magenta );
    console.log( `============================`.cyan );
});

//31