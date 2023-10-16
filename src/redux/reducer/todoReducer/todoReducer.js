const initialState = {
 
    tods:[

            {id:0,text:'Learn react',completed:True},
            {id:1,text:'learn Redux',completed:false,color:'purple'},
            {id:2,text:'Build something fun!',completed:false,color:'blue'},
    ]
    
};

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId,todo) => {
        return Math.max(todo.id,maxId)
    },-1)

    return maxId + 1;
}

export default function todoReducer(state=initialState,action){

    switch(action.type) {

        default:
            return state;

    }

}