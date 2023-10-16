/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'


export default function ListItem(props){

    
    return (
          <li
          
             css={css`
                color:blue;
                padding:5px;
                margin:5px;
                &:hover {
                    background-color:gray;
                }
             `}
          
          >{props.title}</li>
    );

}