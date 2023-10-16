/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GET_DATA } from '../action/actions';
import SongItem from './SongItem';

export default function SongsContainer(props) {

    

    const dispatch = useDispatch();
    const state = useSelector(state=>state.data);


    useEffect(()=>{
        dispatch(GET_DATA());
    },[])

    
    return (

        <div css={css`
            margin:10px;
            flex-grow:1;
            height:70vh;
            overflow:scroll;
            
        `}>
            {state?(
            state.map((song)=>{
                return song.content
            })
        ):
        <p>Loadding</p>}

        </div>
    );
}