import axios from "axios";
import { useEffect, useReducer } from "react";

import Div from "./basic_components/Div";
import Loader from "./basic_components/Loader";
import StartScreen from "./StartScreen";
import Question from "./question/Question";
import Btn from "./basic_components/Btn";
import ProgressQuiz from "./ProgressQuiz";
import Error from "./basic_components/Error";
import FinishScreen from "./finishScreen";
import Timer from "./Timer";

const initialData = {
    dummy_data : [],

    // status ==> loading / error / ready / active / finsish
    status : 'loading',
    index : 0,
    answer : null,
    points : 0,
    highScore : 0,
    secondsRemaining : null,
}

const SEC_FOR_EACH_QUESTION = 40;


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
            secondsRemaining : state.dummy_data.length * SEC_FOR_EACH_QUESTION
        }

        case 'newAnswer' : 
        const question = state.dummy_data.at(state.index)
        return {
            ...state,
            answer : action.payLoad,
            points : (action.payLoad === question.correctOption) ? (state.points + question.points) : state.points
        }

        case 'nextQuestion' : return {
            ...state,
            index : state.index + 1,
            answer : null,
        }

        case 'finish' : return {
            ...state,
            status : 'finish',
            highScore : state.points > state.highScore ? state.points : state.highScore,
        }

        case 'reset' : return {
            ...initialData,
            status : 'ready',
            dummy_data : state.dummy_data,
            highScore : state.highScore,
        }

        case 'tick' : return {
            ...state,
            secondsRemaining : state.secondsRemaining - 1,
            status : state.secondsRemaining === 0 ? 'finish' : state.status
        }

        default : throw new Error('unkown action')
    }
}

const MainQuizContent = () => {
    const [{dummy_data , status , index , answer , points , highScore , secondsRemaining} , dispatch] = useReducer(reducerData , initialData)

    const maxPossiblePoints = dummy_data.reduce( (prev , cur) => {
        return prev + cur.points
    },0)

    useEffect(() => {
        axios.get('https://654928d1dd8ebcd4ab2445e0.mockapi.io/questions')
        .then(res => dispatch({type : 'dataReceived' , payLoad : res.data}))
        .catch(() => dispatch({type : 'dataFailed'}))
    },[])

    return (
        <>
            <Div>
                {status === 'loading' && <Loader/>}
                
                {status === 'error' && <Error/>}

                {status === 'ready' && <StartScreen QuestionsLength = {dummy_data.length} dispatch = {dispatch} />}
                
                {
                    status === 'active' && 
                    <>
                        <ProgressQuiz index = {index} QuestionsLength = {dummy_data.length} points = {points} answer = {answer} maxPossiblePoints = {maxPossiblePoints}/>

                        <Question currentQuestion = {dummy_data[index]} dispatch = {dispatch} answer = {answer}/>

                        <div className = "w-7/12 h-14 p-1 flex flex-wrap justify-between">
                            <Timer dispatch = {dispatch} secondsRemaining = {secondsRemaining}/>
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

                {status === 'finish' && <FinishScreen dispatch = {dispatch} points = {points} maxPossiblePoints = {maxPossiblePoints} highScore = {highScore}/>}

            </Div>
        </>
    );
};

export default MainQuizContent;