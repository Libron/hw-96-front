import {
    DELETE_COCKTAIL_FAILURE,
    DELETE_COCKTAIL_REQUEST,
    DELETE_COCKTAIL_SUCCESS,
    FETCH_COCKTAIL_FAILURE,
    FETCH_COCKTAIL_REQUEST, FETCH_COCKTAIL_SUCCESS,
    FETCH_COCKTAILS_FAILURE,
    FETCH_COCKTAILS_REQUEST,
    FETCH_COCKTAILS_SUCCESS, PUBLISH_COCKTAIL_FAILURE, PUBLISH_COCKTAIL_REQUEST, PUBLISH_COCKTAIL_SUCCESS
} from "../actions/cocktailsActions";

const initialState = {
    cocktails: [],
    cocktail: null,
    loading: false,
    error: null
};

const cocktailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COCKTAILS_REQUEST:
        case DELETE_COCKTAIL_REQUEST:
        case PUBLISH_COCKTAIL_REQUEST:
            return {...state, loading: true};
        case FETCH_COCKTAILS_SUCCESS:
            return {...state, cocktails: action.cocktails, loading: false};
        case FETCH_COCKTAILS_FAILURE:
            return {...state, error: action.error, loading: false};
        case FETCH_COCKTAIL_REQUEST:
            return {...state, loading: true};
        case FETCH_COCKTAIL_SUCCESS:
            return {...state, cocktail: action.cocktail, loading: false};
        case FETCH_COCKTAIL_FAILURE:
        case DELETE_COCKTAIL_FAILURE:
        case PUBLISH_COCKTAIL_FAILURE:
            return {...state, error: action.error, loading: false};
        case DELETE_COCKTAIL_SUCCESS:
        case PUBLISH_COCKTAIL_SUCCESS:
            return {...state, cocktails: action.cocktails, loading: false};
        default:
            return state;
    }

};

export default cocktailReducer;