/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import SingerPhotoName from './SingerPhotoName';


function SongItem(props) {


        function deleteItem(index) {

        }
        return (

            <div 
              
              
              
            >
                <div css={css`
                  display:flex;
                  justify-content:space-between;

              `}>
                        <SingerPhotoName  singerName={props.singerName} imgUrl={props.albumPhoto} songName={props.songTitle.slice(0,Math.floor(Math.random()*20)+5)}/>
                            <div css={css`
                                display:flex;
                                align-items:center;
                            `}>
                                <EditButton itemKey={props.mykey} />
                                <DeleteButton itemKey={props.mykey}/>
                            </div>
                </div>
                <hr/>

            </div>
        );
}
export default SongItem; 