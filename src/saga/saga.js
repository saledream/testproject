import axios from 'axios';
import {call, put,all, select,takeLatest, takeEvery} from 'redux-saga/effects'
import {GET_DATA, OPERATION_SUCCESS, OPERATION_FAILED, ADD_MUSIC, UPDATE_STATE, MAKE_DISPLAYER_CONTENT_EMPTY, EDIT_MUSIC_ITEM, EDIT_MUSIC_ITEM_SUCCESS } from '../action/actions';
import { MAKE_DISPLAYER_CONTENT } from '../action/actions';
import { 
    MUSIC_ADD_SUCCESS,MUSIC_ADD_FAILED,UPDATE_STATE_SUCCESS,
UPDATE_STATE_FAILED,MAKE_DISPLAYER_CONTENT_EMPTY_SUCCESS,MAKE_DISPLAYER_CONTENT_SUCCESS, DELETE_MUSIC_ITEM_SUCCESS,DELETE_MUSIC_ITEM
 } from '../action/actions';

function userFetch(){

    return axios.get('https://jsonplaceholder.typicode.com/users').then((res) =>{

    console.log("users",res.data);

    return res.data;
    }).catch((error) =>{
        throw error;
    })
}
function songFetch(userId=1) {
     var userSongUrl = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;
    return axios.get(userSongUrl).then((res)=>{
        console.log("songs",res.data);
        return res.data

    }).catch((error) => {
        throw error
    })

}
function photoFetch(albumId=1) {

    var albumPhotoUrl = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    return axios.get(albumPhotoUrl).then((res)=>{

        console.log("photos",res.data)
        return res.data;

    }).catch((error) =>{
        console.log("photoErro",error);;
        throw error;
    });
}


function* getUsersSongPhotoFetch(){

    var data = []
    try {
    // console.log("loadding ...")
    //
         
         const users = yield call(userFetch);// USED TO Fetch data
        console.log("users of ...",users);
        for(var user of users) {
           var userData = {};
            userData.id = user.id;
            userData.userName = user.name;
            console.log("userData",userData);
             const albums = yield call(songFetch,user.id);
            console.log("albums",albums);
             userData.albums = albums;
             const albumPhoto = yield call(photoFetch,albums[0].id)
              userData.albumPhoto = albumPhoto;

           

            data.push(userData);


         }
        
    //     console.log("fetched_data",data);
        
        yield put({type:OPERATION_SUCCESS,data}); // used to tell the middleware to dispatch the action the store.
    }catch (error) {
        yield put({type:OPERATION_FAILED,error})
    }
}

// second saga
function postUser(name) {

    return axios.post('https://jsonplaceholder.typicode.com/users',{
        name:name,
        id:Math.floor(Math.random()*21+11),

    }).then((res) => res.data);
}
function postAlbum(title,userId) {
    return axios.post(`https://jsonplaceholder.typicode.com/users/${userId}/albums`,{
        title:title,
        id:Math.floor(Math.random()*21+11),
        userId: userId,

    }).then((res) => res.data);
}
function postAlbumPhoto(title,albumId) {
    return axios.post(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,{
        title:title,
        id:Math.floor(Math.random()*21+11),
        albumId: albumId,
        thumbnailUrl:"https://via.placeholder.com/150/9/2c952"

    }).then((res) => res.data);
}

export function* uploadMusic(formData){

    try {
         var postedData = {};
         const user = yield call(postUser,formData.name);

         for(var usr of user){
            postedData.id = usr.id;
            postedData.name = usr.name;

            const album = yield call(postAlbum,formData.title,usr.id);
            postedData.album = album;
            const albumPhoto = yield call(postAlbumPhoto,formData.title,album.id);

         }

         return postedData
    }catch(error){
        throw error 
    }
    
}

export function* AddMusic(){


    try {
        const formData = yield select(state=>state.uploadingContent);
        var postedData = {};
         console.log("what is going on hrew")
         const user = yield call(postUser,formData.name);
         console.log("what is going on hrew",user)
         
        postedData.id = user.id;
        postedData.name = user.name;
        console.log("user id",user.id)
        const album = yield call(postAlbum,formData.title,user.id);
        console.log("what is going on hrew",album)
        postedData.album = album;
        const albumPhoto = yield call(postAlbumPhoto,formData.title,album.id);
        postedData.albumPhoto = albumPhoto;
        console.log("what is going on hrew",albumPhoto)
        
        console.log("loadding",postedData);
        
        yield put({type:MUSIC_ADD_SUCCESS,postedData})

    }catch(error) {
        yield put({type:MUSIC_ADD_FAILED,error})   
    }
}
export function* WatcherAddMusic(){

    yield takeEvery(ADD_MUSIC,AddMusic);
}
// third saga

export function* updateUploadedContent(action){

    const payload = action.payload;
    console.log("updating uploaded content",payload)
    try {
        yield put({type:UPDATE_STATE_SUCCESS,payload});
    }catch(error) {
        yield put({type:UPDATE_STATE_FAILED,error})
    }
}
export function* WatcherUpdateUploadedContent(){

    yield takeEvery(UPDATE_STATE,updateUploadedContent)
}

//fourth saga 
export function* updateDisplayerContent(){

        
    try {
        yield put({type:MAKE_DISPLAYER_CONTENT_EMPTY_SUCCESS});
    }catch(error) {
       throw error
    }
}
export function* WatcherUpdateDisplayerContent(){

    yield takeEvery(MAKE_DISPLAYER_CONTENT_EMPTY,updateDisplayerContent)
}
//fiveth
export function* makeContent(action){

    const payload = action.payload
    console.log("payloaddding",payload);
    yield put({type:MAKE_DISPLAYER_CONTENT_SUCCESS,payload})
}
export function* WatcherMakeContent(){

    yield takeEvery(MAKE_DISPLAYER_CONTENT,makeContent);
}

export function* deletMusicItem(action){
      
    var index = action.payload;
    yield put({type:DELETE_MUSIC_ITEM_SUCCESS,index});

}
export function* WatcherDeleteItem() {
     
       yield takeEvery(DELETE_MUSIC_ITEM,deletMusicItem);
}
export function* editMusicItem(action) {

    console.log("is every")
     const formdata = action.payload;
      yield put({type:EDIT_MUSIC_ITEM_SUCCESS,formdata});
}
export function* WatcherEditItem(){

    yield takeEvery(EDIT_MUSIC_ITEM,editMusicItem);
}

function* mySaga() {

    while(true) {
        
        yield all([
            
            WatcherMakeContent(),
            WatcherUpdateDisplayerContent(),
            WatcherUpdateUploadedContent(),
            WatcherAddMusic(),
            getUsersSongPhotoFetch(),
            WatcherDeleteItem(),
            WatcherEditItem(),
        ])

    }
}
export default mySaga;