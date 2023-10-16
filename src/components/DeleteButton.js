import { useDispatch } from 'react-redux';
import delImg from '../images/delete.png';
import { DELETE_MUSIC_ITEM } from '../action/actions';

function DeleteButton(props) {

        const dispatch = useDispatch();
        //const {key} = props.key;
    var buttonStyle = {

        backgroundImage:`url(${delImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'20px',
        backgroundPosition:'center',
        width:'30px',
        backgroundColor:'transparent',
        border:'none',
    }
        return (

            <input 
                style={buttonStyle}
                type="button"
                onClick={()=>{
                    console.log("clicking",props.itemKey);
                    dispatch(DELETE_MUSIC_ITEM(props.itemKey));
                }}
            />
        );
}
export default DeleteButton;