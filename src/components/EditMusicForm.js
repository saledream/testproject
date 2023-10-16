import { useState } from "react";
import { EDIT_MUSIC_ITEM } from "../action/actions";
import { useDispatch } from "react-redux";
import { MAKE_DISPLAYER_CONTENT_EMPTY } from "../action/actions";

function EditMusicForm(props){

        const [artisName,setArtistName] = useState(props.singerName);
        const [songTitle, setSongTitle] = useState(props.songTitle);
        const dispatch = useDispatch();

        return (

            <div>
                <p> Artist Name: 
                        <input 
                            type="text" 
                            value={artisName}
                            onChange={(e)=>{
                                setArtistName(e.target.value);
                            }}
                        />
                </p>
                <p>Song Title: 
                        <input
                        type="text"
                        value={songTitle}
                            onChange={(e) =>{
                                setSongTitle(e.target.value);
                            }}
                        />
                </p>
               <input 
                    type="button" 
                    value="Edit" 
                    onClick = {()=>{
                        console.log("item key",props.itemKey);
                        var formdata = {title:songTitle,name:artisName,itemKey:props.itemKey}

                    dispatch(EDIT_MUSIC_ITEM(formdata))
                    dispatch(MAKE_DISPLAYER_CONTENT_EMPTY());
                    //dispatch(ADD_MUSIC());
                    }}
               />
            </div>
        );

}
export default EditMusicForm;