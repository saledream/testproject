import { put,takeLatest } from "redux-saga/effects";
import { MAKE_DISPLAYER_CONTENT_EMPTY, MAKE_DISPLAYER_CONTENT_EMPTY_FAILED, MAKE_DISPLAYER_CONTENT_EMPTY_SUCCESS} from "../action/actions";

function* updateDisplayerContent(){

        
        try {
            yield put({type:MAKE_DISPLAYER_CONTENT_EMPTY_SUCCESS});
        }catch(error) {
            yield put({type:MAKE_DISPLAYER_CONTENT_EMPTY_FAILED,error})
        }
}
export default function* updateStateSaga(){


    while(true) {

        yield takeLatest(MAKE_DISPLAYER_CONTENT_EMPTY,updateDisplayerContent);
        
    }
}