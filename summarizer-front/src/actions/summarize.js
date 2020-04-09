import {
    SUMMARIZE
} from '../constants/summarize'

const ROOT_URL = "https://localhost";

//POST
export function postSummary(payload){
    console.log("caí no action de gerar resumo");

    return function(dispatch){
        return fetch(`$(ROOT_URL)/summarize`,
        {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        }).catch(error => {
            console.log(error);
        });
    };

}

