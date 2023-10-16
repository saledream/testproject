import { all,fork } from 'redux-saga/effects';
import saga1 from './saga1';
import saga  from './saga';
import displayerSaga from './displayerSaga';
import updateStateSaga from './updatestatesaga';

export default  function* rootSaga(){

    while(true) {
       
       yield fork (saga1());
       yield fork (displayerSaga());
       yield fork(updateStateSaga());
       yield fork(saga());
    }
} 