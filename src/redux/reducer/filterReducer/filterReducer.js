const initialState = {
    status:'all',
    colors:[]
}

export default function filterReducer(state = initialState,action) {

    switch(action.type) {

        case 'STATUSFILTERCHANGE':
            return {

                ...state,
                status:action.payload
            }

        default:
            return state;
    }
}