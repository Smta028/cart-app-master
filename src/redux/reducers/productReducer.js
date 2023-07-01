import * as actions from '../actions/actionTypes';

const initialState = {
    loading : false,
    products : [],
    error : ''
}

function productReducer(state = initialState , action){

    switch (action.type) {

        case actions.PRODUCT_FETCH_REQUEST:
            return { ...state, loading: true };

        case actions.PRODUCT_FETCH_SUCCESS:
            return { ...state, loading: false, error: '', products: action.payload };

        case actions.PRODUCT_FETCH_FAILURE:
            return { ...state, loading: false, products: [], error: action.payload };

        default :
            {
                return state;
            }
    }

}

export default productReducer;