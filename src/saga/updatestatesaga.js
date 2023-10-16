import { put,takeLatest } from "redux-saga/effects";
import { UPDATE_STATE } from "../action/actions";
import { UPDATE_STATE_FAILED } from "../action/actions";
import { UPDATE_STATE_SUCCESS } from "../action/actions";


function* updateUploadedContent(action){

        const payload = action.payload;
        try {
            yield put({type:UPDATE_STATE_SUCCESS,payload});
        }catch(error) {
            yield put({type:UPDATE_STATE_FAILED,error})
        }
}
export default function* updateStateSaga(){


    while(true) {

        yield takeLatest(UPDATE_STATE,updateUploadedContent);
        
    }
}