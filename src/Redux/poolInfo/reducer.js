import {
    ActionTypes
} from "../types";

const INITIAL_STATE = {
    Platinum: 0,
    Silver: 0,
    Gold: 0,
    topPool: 0
};

const poolInfoReducer = (state = INITIAL_STATE, {
    type,
    payload
}) => {
    switch (type) {
        case ActionTypes.POOL_DETAIL:
            return {
                ...state,
                Platinum: payload.Platinum,
                    Silver: payload.Silver,
                    Gold: payload.Gold,
                    topPool: payload.topPool
            };
        default:
            return state;
    }
};
export default poolInfoReducer;

let rankState = {

    userRank: "",
}
export const userRank = (state = rankState, {
    type,
    payload
}) => {
    switch (type) {
        case ActionTypes.USER_RANK:
            return {
                ...state,
                userRank: payload
            };
        default:
            return state;
    }
};