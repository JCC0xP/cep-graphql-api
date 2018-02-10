const cepTypes = `

    type CEP {
        cep: String!
        logradouro: String!
        complemento: String
        bairro: String!
        localidade: String!
        uf: String!
        unidade: String
        ibge: String
        gia: String
    }

`;

const cepQueries = `
    cepRequest(cepNumber: String!): CEP!
`;

export {
    cepTypes,
    cepQueries,
}
