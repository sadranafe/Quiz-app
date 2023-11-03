import axios from "axios";
import { useEffect, useReducer } from "react";
import Div from "./basic_components/Div";

const initialData = {
    dummy_data : [],

    // status ==> loading error ready active finsish
    status : 'loading',
    index : 0,
    answer : null,
    points : 0,
}


const reducerData = (state , action) => {
    switch(action.type){
        case 'dataReceived' : return {
            ...state,
            status : 'ready',
            dummy_data : action.payLoad
        }

        case 'dataFailed' : return {
            ...state,
            status : 'error',
        }
    }
}

const MainQuizContent = () => {
    const [Data , dispatch] = useReducer(reducerData , initialData)

    useEffect(() => {
        axios.get('http://localhost:9000/questions')
        .then(res => dispatch({type : 'dataReceived' , payLoad : res.data}))
        .catch(() => dispatch({type : 'dataFailed'}))
    },[])

    return (
        <>
            <Div>
                <p>this is a test</p>
            </Div>
        </>
    );
};

export default MainQuizContent;