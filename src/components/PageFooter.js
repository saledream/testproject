/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import UploadMusicForm from './UploadMusicForm';
import { MAKE_DISPLAYER_CONTENT } from '../action/actions';

export default function PageFooter(){

        //const state = useSelector()
         const dispatch = useDispatch();
         //const state = useSelector(state=>state.)

    return (
        <div css={css`
        
               
        `}>
           <input
           type="button"
            value="Add Music"
            onClick={()=>{
                dispatch(MAKE_DISPLAYER_CONTENT(<UploadMusicForm />));
                
            }}
           />
        </div>
    );
}
