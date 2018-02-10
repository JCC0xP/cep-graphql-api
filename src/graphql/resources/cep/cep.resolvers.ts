import { GraphQLResolveInfo } from "graphql";
import axios, { AxiosRequestConfig } from 'axios';
import { handleError } from "../../../utils/utils";

const fetchToApiCEP = (cepNumber: String) => {
    const url = `https://viacep.com.br/ws/${cepNumber}/json/`;
    const config: AxiosRequestConfig = {
        method: 'get',
        url,
    };
    return axios(config);
};

export const cepResolvers = {

    Query: {

        cepRequest: async (parent: Object, { cepNumber }: { cepNumber: String }, context, info: GraphQLResolveInfo) => {
            let response;
            await fetchToApiCEP(cepNumber)
                .then((res) => {
                    response = res.data;
                    return res.data;
                })
                .catch(handleError);
            return response;
        }

    },

};