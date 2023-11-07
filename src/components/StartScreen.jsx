import Btn from "./basic_components/Btn";

const StartScreen = ({ QuestionsLength , dispatch }) => {
    return (
        <>
            <div className = "w-full h-full flex flex-wrap justify-center items-center content-center">
                <div className = "w-full text-center mb-5">
                    <h1 className = "text-4xl font-bold max-[280px]:text-3xl">Welcome to the React Quiz !</h1>
                </div>

                <p className = "text-lg text-center">{QuestionsLength} questions to test your react mastery</p>

                <div className = "w-full text-center pt-5">
                    <Btn content = "let's start" type = 'active' dispatch = {dispatch}/>
                </div>
            </div>
        </>
    );
};

export default StartScreen;