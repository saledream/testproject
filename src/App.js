// import Cart from './components/Cart'
// function App() {

//     return (
//          <Cart />
//     );

// }

// export default App;
import { useDispatch,useSelector } from "react-redux";
import { loadData, takeGetUserFetchAction } from "./action/actionCreator";
import { useEffect } from "react";
import MainContainer from "./components/MainContainer";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";


function App() {

    
    const dispatch = useDispatch();

    const state = useSelector(state=>state.data);
    console.log("datainredering",state);

   
    return( 
    <div>
        <PageHeader />
        <MainContainer />
        <PageFooter />

        
    </div>
    );
}

export default App;

