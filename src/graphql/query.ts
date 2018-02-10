import { cepQueries } from './resources/cep/cep.schema';

const Query = `
    type Query {
        ${cepQueries}
    }
`;

export {
    Query
}