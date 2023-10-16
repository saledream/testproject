import { ADD_ITEM,DELETE_ITEM } from "./actionType";

// this functions return action object that will be an argument for reducer.

const addItem = () => {

    return {
        type:ADD_ITEM,
    };
};

const deleteItem = () => {

    return {
        type:DELETE_ITEM,
    }
}
export { addItem,deleteItem}

