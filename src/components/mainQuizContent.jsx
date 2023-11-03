import axios from "axios";
import { useEffect, useReducer } from "react";

import Div from "./basic_components/Div";
import Loader from "./basic_components/Loader";
import StartScreen from "./StartScreen";
import Question from "./question/Question";
import Btn from "./basic_components/Btn";
import ProgressQuiz from "./ProgressQuiz";

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

        case 'active' : return {
            ...state,
            status : 'active',
        }

        case 'newAnswer' : return {
            ...state,
            answer : action.payLoad
        }

        case 'nextQuestion' : return {
            ...state,
            index : state.index + 1,
            answer : null,
        }

        case 'finish' : return {
            ...state,
            status : 'finsish'
        }
    }
}

const MainQuizContent = () => {
    const [{dummy_data , status , index , answer , points} , dispatch] = useReducer(reducerData , initialData)

    const maxPossiblePoints = dummy_data.reduce((prev , cur) => {
        return prev + cur.points
    },0)

    useEffect(() => {
        axios.get('http://localhost:9000/questions')
        .then(res => dispatch({type : 'dataReceived' , payLoad : res.data}))
        .catch(() => dispatch({type : 'dataFailed'}))
    },[])

    return (
        <>
            <Div>
                {status === 'loading' && <Loader/>}
                {status === 'ready' && <StartScreen QuestionsLength = {dummy_data.length} dispatch = {dispatch} />}
                {
                    status === 'active' && 
                    <>
                        <ProgressQuiz index = {index} QuestionsLength = {dummy_data.length} points = {points} answer = {answer} maxPossiblePoints = {maxPossiblePoints}/>

                        <Question currentQuestion = {dummy_data[index]} dispatch = {dispatch} answer = {answer}/>
                        
                        <div className = "w-7/12 text-end h-14 p-1">
                            {
                                answer !== null ?
                                    index + 1 < dummy_data.length ?
                                    <Btn type = 'nextQuestion' content = 'next' dispatch = {dispatch} /> :
                                    <Btn type = 'finish' content = 'finish' dispatch = {dispatch} /> 
                                : ''
                            }
                        </div>
                    </>
                }
            </Div>
        </>
    );
};

export default MainQuizContent;