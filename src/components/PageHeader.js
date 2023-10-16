/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';


export default function PageHeader(){

    return (
        <div css={css`
        
                padding:10px 20px;
                background-color:#3a3440;
                color:white;
        `}>
            <h1>
                React Music App
            </h1>
        </div>
    );
}