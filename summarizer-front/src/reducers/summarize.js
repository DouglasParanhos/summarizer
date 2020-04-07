import {
    SUMMARIZE
} from "../constants/summarize"

const initialState = {
    summaryPercent: 10,
    originalText: "",
    summaryText:""
}

function rootReducer(state = initialState, action) {

    if(action.type === SUMMARIZE){
        console.log("Summarize text action activated");

        console.log(action.payload);

        return Object.assign({}, state, {
            initialState: {...action.payload}
        });
    }

    return state;
}

export default rootReducer;