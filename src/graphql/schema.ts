import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import { Query } from './query';

import { cepTypes } from './resources/cep/cep.schema';

import { cepResolvers } from './resources/cep/cep.resolvers';

const resolvers = merge(
    cepResolvers
);

const SchemaDefinition = `
    type Schema {
        query: Query
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        cepTypes,
    ],
    resolvers
});