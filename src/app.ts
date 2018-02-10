import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as cors from 'cors';

import schema from './graphql/schema';

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.init();
    }

    private init(): void {
        this.middleware();
    }

    private middleware(): void {

        this.express.use(cors({
            origin: '*',
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Enconding'],
            preflightContinue: false,
            optionsSuccessStatus: 204
        }));

        this.express.use('/graphql',
            graphqlHTTP((req) => ({
                schema: schema,
                graphiql: process.env.NODE_ENV === 'development',
                context: req['context']
            }))
        );

    }

}

export default new App().express;