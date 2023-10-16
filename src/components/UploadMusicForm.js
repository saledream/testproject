import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_MUSIC, MAKE_DISPLAYER_CONTENT_EMPTY, UPDATE_STATE } from "../action/actions";

function UploadMusicForm(){

        const [musicTitle, setMusicTitle] = useState('');
        const [singerName,setSingerName]  = useState('');
        const dispatch  = useDispatch();
       
       

   return (
      <div>

          <p>
            <input
             type="text"
             placeholder="Enter music title"
             onChange={(e)=>{
                        setMusicTitle(e.target.value);
                        console.log("music title",musicTitle);
             }}
            />
            </p>
            <p>
            <input
                type="text"
                placeholder="Enter singer name"
                onChange={(e)=>{
                    setSingerName(e.target.value);
                    console.log("SingerName",singerName);
                }}
            />
            </p>
            <p>
            <input 
                type="button"
                value="add"
                onClick={()=>{
                    console.log("form data",musicTitle,singerName);
                    var payload = {title:musicTitle,name:singerName}
                    dispatch(UPDATE_STATE(payload));
                    dispatch(MAKE_DISPLAYER_CONTENT_EMPTY());
                    dispatch(ADD_MUSIC());
                }}
            />
            </p>
      </div>
      

   );

}
export default UploadMusicForm;