import { LangAction, LangState, SET_LANGUAGE } from "../type";

const localStorageLang = localStorage.getItem('language')

const initialState: LangState = {
    language: localStorageLang ? localStorageLang : 'EN'
}

const langReducer = (state = initialState, action: LangAction) => {
    switch(action.type) {
        case SET_LANGUAGE:
            return {
                state,
                language: action.payload
            }
        default: 
            return state;
    }
}

export default langReducer;

