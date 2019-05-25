import axios from '../../axios-api';
import {push} from "connected-react-router";

export const FETCH_COCKTAILS_REQUEST = 'FETCH_COCKTAILS_REQUEST';
export const FETCH_COCKTAILS_FAILURE = 'FETCH_COCKTAILS_FAILURE';
export const FETCH_COCKTAILS_SUCCESS = 'FETCH_COCKTAILS_SUCCESS';

export const FETCH_COCKTAIL_REQUEST = 'FETCH_COCKTAIL_REQUEST';
export const FETCH_COCKTAIL_FAILURE = 'FETCH_COCKTAIL_FAILURE';
export const FETCH_COCKTAIL_SUCCESS = 'FETCH_COCKTAIL_SUCCESS';

export const CREATE_COCKTAIL_REQUEST = 'CREATE_COCKTAIL_REQUEST';
export const CREATE_COCKTAIL_FAILURE = 'CREATE_COCKTAIL_FAILURE';
export const CREATE_COCKTAIL_SUCCESS = 'CREATE_COCKTAIL_SUCCESS';

export const DELETE_COCKTAIL_REQUEST = 'DELETE_COCKTAIL_REQUEST';
export const DELETE_COCKTAIL_FAILURE = 'DELETE_COCKTAIL_FAILURE';
export const DELETE_COCKTAIL_SUCCESS = 'DELETE_COCKTAIL_SUCCESS';

export const PUBLISH_COCKTAIL_REQUEST = 'PUBLISH_COCKTAIL_REQUEST';
export const PUBLISH_COCKTAIL_FAILURE = 'PUBLISH_COCKTAIL_FAILURE';
export const PUBLISH_COCKTAIL_SUCCESS = 'PUBLISH_COCKTAIL_SUCCESS';

const fetchCocktailsRequest = () => ({type: FETCH_COCKTAILS_REQUEST});
const fetchCocktailsSuccess = cocktails => ({type: FETCH_COCKTAILS_SUCCESS, cocktails});
const fetchCocktailsFailure = error => ({type: FETCH_COCKTAILS_FAILURE, error});

const fetchCocktailRequest = () => ({type: FETCH_COCKTAIL_REQUEST});
const fetchCocktailSuccess = cocktail => ({type: FETCH_COCKTAIL_SUCCESS, cocktail});
const fetchCocktailFailure = error => ({type: FETCH_COCKTAIL_FAILURE, error});

const createCocktailRequest = () => ({type: CREATE_COCKTAIL_REQUEST});
const createCocktailSuccess = cocktail => ({type: CREATE_COCKTAIL_SUCCESS, cocktail});
const createCocktailFailure = error => ({type: CREATE_COCKTAIL_FAILURE, error});

const deleteCocktailRequest = () => ({type: DELETE_COCKTAIL_REQUEST});
const deleteCocktailSuccess = cocktails => ({type: DELETE_COCKTAIL_SUCCESS, cocktails});
const deleteCocktailFailure = error => ({type: DELETE_COCKTAIL_FAILURE, error});

const publishCocktailRequest = () => ({type: PUBLISH_COCKTAIL_REQUEST});
const publishCocktailSuccess = cocktails => ({type: PUBLISH_COCKTAIL_SUCCESS, cocktails});
const publishCocktailFailure = error => ({type: PUBLISH_COCKTAIL_FAILURE, error});

export const fetchCocktails = query => {
    return dispatch => {
        dispatch(fetchCocktailsRequest());
        let url = '/cocktails';
        if (query) {
            url += query;
        }
        return axios.get(url).then(
            response => {
                dispatch(fetchCocktailsSuccess(response.data));
            },
            error => {
                dispatch(fetchCocktailsFailure(error));
            });
    }
};

export const fetchCocktail = id => {
    return dispatch => {
        dispatch(fetchCocktailRequest());
        return axios.get('/cocktails/' + id).then(
            response => {
                dispatch(fetchCocktailSuccess(response.data));
            },
            error => {
                dispatch(fetchCocktailFailure(error));
            });
    };
};

export const createCocktail = cocktailData => {
    return dispatch => {
        dispatch(createCocktailRequest());
        return axios.post('/cocktails', cocktailData).then(
            response => {
                dispatch(push('/'));
                dispatch(createCocktailSuccess(response.data));
            },
            error => {
                if (error.response) {
                    dispatch(createCocktailFailure(error.response.data));
                } else {
                    dispatch(createCocktailFailure({global: "No network connection "}))
                }
            });
    };
};

export const deleteCocktail = id => {
    return dispatch => {
        dispatch(deleteCocktailRequest());
        return axios.delete('/cocktails?id=' + id).then(
            response => {
                dispatch(deleteCocktailSuccess(response.data));
            },
            error => dispatch(deleteCocktailFailure(error)));
    };
};

export const publishCocktail = id => {
    return dispatch => {
        dispatch(publishCocktailRequest());
        return axios.post('/cocktails/' + id + '/toggle_published').then(
            response => {
                dispatch(publishCocktailSuccess(response.data));
            },
            error => dispatch(publishCocktailFailure(error)));
    };
};