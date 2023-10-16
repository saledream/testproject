
import editImg from '../images/edit.png';
import { useDispatch, useSelector } from 'react-redux';
import EditMusicForm from './EditMusicForm';
import { MAKE_DISPLAYER_CONTENT } from '../action/actions';

function EditButton(props) {

    const dispatch = useDispatch();
    const state = useSelector(state=>state.data);
    console.log("item id",state)
    const itemKey = props.itemKey;
   
    var buttonStyle = {

        backgroundImage:`url(${editImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'20px',
        backgroundPosition:'center',
        width:'30px',
        backgroundColor:'transparent',
        border:'none',
    }  
    function handleClick(){

        var data = state.filter((item)=>{
            return item.id == itemKey;

        })
        console.log("wow" ,data[0]);
        dispatch(MAKE_DISPLAYER_CONTENT(<EditMusicForm singerName={data[0].singerName} songTitle={data[0].songTitle} itemKey={itemKey}/>));


    }
        return (

            <input 
                style={buttonStyle}
                type="button"
                onClick={handleClick}
            />
        );
}
export default EditButton;