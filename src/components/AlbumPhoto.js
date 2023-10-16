/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

export default function AlbumPhoto(props) {

    return (
        <div css={css`
            display:flex;
        
        `}>
            <p> {props.title}</p>
            <img src={props.img} width="100px" />
        </div>
    );
}