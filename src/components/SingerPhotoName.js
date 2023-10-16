/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import { useState } from 'react';

function SingerPhotoName(props){

     const musicTitleTooltip = "none";
     const setMusicTitleTooltip = "inline-block";

    //const [musicTitleTooltip,setMusicTitleTooltip] = useState("none");
    var [singerNameTooltip,setSingerNameTooltip] = useState("none");


    var colors = ['#3a3440','#3B71CA','#9FA6B2','#14A44D','#DC4C64','#E4A11B','#54B4D3'];
    function me(){
        musicTitleTooltip = "inline-block";
    }
    return (

        <div css={css`
            display:flex;
            align-items:center;
        `}>
            <img 
                css={css`
                    border-radius:30px;
                    margin:0 5px;
                `}
            src={props.imgUrl} width="50px"/>
            <p css={css`
                 color:purple;
                 
            `}> 
                <span css={css`
                  color:${colors[Math.floor(Math.random()*(colors.length-1))]};
                  position:relative;
                  
            `}>
                  <span className = "tooltip" css={css`
                    display:${musicTitleTooltip};
                    width:120px;
                    background-color:black;
                    color:white;
                    text-align:center;
                    padding: 5px 0;
                    border-radius:6px;
                    position:absolute;
                    z-index:1;
                  
                  `}>
                      Music Title
                  </span>
                    {props.songName}
                </span>/<span
                css={css`
                color:${colors[Math.floor(Math.random()*(colors.length-1))]};
                position:relative;
          `}
         
                >
                     <span css={css`
                    display:${singerNameTooltip};
                    width:120px;
                    background-color:black;
                    color:white;
                    text-align:center;
                    padding: 5px 0;
                    border-radius:6px;
                    position:absolute;
                    z-index:1;
                    &:hover
                  `}>
                        Singer Name
                    </span>
                    {props.singerName}</span></p>
        </div>
    );
}
export default SingerPhotoName;