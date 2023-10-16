/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import SongsContainer from './SongsContainer';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GET_DATA } from '../action/actions';

export default function MainContainer(){

        const leftpanelContent = useSelector(state=>state.leftPanelContent);
        const notice =useSelector(state=>state.notification);
        const state = useSelector(state=>state.data);

        const dispatch = useDispatch();


        useEffect(()=>{
            dispatch(GET_DATA());
        },[])

    return (

           <div css={css`
               
            `}> 
                <div>
                    {notice}
                </div>
                <div css={css`
                    display:flex;


                `}>
                    <div css={css`
                       display:flex;
                       flex-direction:column;
                       align-item:center;
                       justify-content:center;
                       margin:10px;
                    `}>
                    {leftpanelContent}
                    </div>
                    <SongsContainer state={state}/>
                </div>
                

           </div>

    );

}