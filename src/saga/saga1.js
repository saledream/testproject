import {take,call,put,select} from 'redux-saga/effects';
import { MUSIC_ADD_FAILED,ADD_MUSIC,MUSIC_ADD_SUCCESS } from '../action/actions';

import  Axios  from 'axios';
import axios from 'axios';

function uploadMusic(formData){

    try {

        
         return null;
    }catch(error) {
        throw error;
    }
        //return axios.post('https://jsonplaceholder.typicode.com/')

}

function* AddMusic(){


    try {
        const uploadingContent = yield select(state=>state.uploadingContent);
        console.log("uploading content",uploadingContent);
        const added_music = yield call(uploadMusic,uploadingContent);
        yield put({type:MUSIC_ADD_SUCCESS})
    }catch(error) {
        yield put({type:MUSIC_ADD_FAILED})   
    }
}
export default function* saga1() {

        while(true) {

            yield take(ADD_MUSIC);
            yield call(AddMusic);
        }

}