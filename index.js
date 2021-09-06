'use strict';

var axios = require("axios");

const BACKEND_URL = "api.tensorbox.ai"
const GET_PREDICTION_URL = "/api/get_prediction"

class Tensorbox {
    constructor(api_key) {
        this.api_key = api_key;
    }

    async generate(param_dict) {
        if (!this.api_key) {
            throw "API key is not defined"
        } 

        const {data} = await axios({
            method: 'post',
            url: BACKEND_URL + GET_PREDICTION_URL,
            data: param_dict
        });

        return data;
    }
}

exports.Tensorbox = Tensorbox