'use strict';

var axios = require("axios");

const BACKEND_URL = "https://api.tensorbox.ai"
const GET_PREDICTION_URL = "/generate"

class Tensorbox {
    constructor(api_key) {
        this.api_key = api_key;
    }

    async generate(param_dict) {
        if (!this.api_key) {
            throw "API key is not defined"
        } 

	param_dict['api_key'] = this.api_key;
        const {data} = await axios({
            method: 'post',
            url: BACKEND_URL + GET_PREDICTION_URL,
            data: param_dict
        });

        return data;
    }
}

exports.Tensorbox = Tensorbox
