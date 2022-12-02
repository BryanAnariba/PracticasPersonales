import 'dotenv/config';
import 'colors';
import cors from 'cors';
import express, { Application, urlencoded, json } from 'express';
import { IndexRoutes } from './routes';


class Server {
    app: Application;

    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    settings () {
        this.app.set( 'PORT', process.env.PORT || 5555 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( json() );
        this.app.use( urlencoded({ extended: true }) );
    }

    routes () {
        this.app.use( IndexRoutes );
    }

    staticFiles () {

    }

    async startServer () {
        try {
            console.clear();
            await this.app.listen( this.app.get( `PORT` ) );
            console.log(`============================`.magenta);
            console.log( `Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
            console.log(`============================`.magenta);
        } catch ( error ) {
            throw new Error( `Starting server failed:L ${ error }`.red );
        }
    }
}

const main = async () => {
    const server: Server = new Server();
    await server.startServer();
}

main();

