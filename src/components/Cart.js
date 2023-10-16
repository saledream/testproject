import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../action/cartAction';
// useSelect is used to read and access the store
// useDispatch help us to dispatch the actions or action creators which in turn return action

//note
// when action is dispatched, all the reducers become active
const Cart = () => {

        const state = useSelector((state)=>state);
        const dispatch =  useDispatch();

        //console.log("store",state)

    return (
        <div>
            <h1>Number of items in Cart:{state.numOfItem}</h1>

            <button
                 onClick={() =>{
                    dispatch(addItem());
                 }}
            > Add Item to Cart</button>
            <button
            onClick = {()=>{
                dispatch(deleteItem());
            }}
            > Remove Item from Cart</button>
        </div>
    )
}
export default Cart;