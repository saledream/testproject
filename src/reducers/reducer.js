import { ADD_ITEM,DELETE_ITEM } from "../action/actionType";

const initialState = {

    numOfItem:0,
};

const  cartReducer = (state =initialState,action) => {


        
    switch(action.type) {

            case ADD_ITEM:
                return {
                    ...state,numOfItem:state.numOfItem + 1,
                };
            case DELETE_ITEM:


                if (state.numOfItem > 0) {
                return {
                    ...state,
                    numOfItem:state.numOfItem -1
                }
                }
                else {
                    return {
                        ...state
                    }
                }
            default:
                return state;
    }

}
export default cartReducer;