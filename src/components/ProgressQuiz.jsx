
const ProgressQuiz = ({ index ,  QuestionsLength , maxPossiblePoints , answer , points }) => {
    // Number(answer !== null) --> it returns 1 if it is true and if it is false it returns 0
    return (
        <>
            <div className = "w-full flex flex-wrap justify-center items-center my-3 mb-5">
                
                <div className = "w-full text-center flex flex-wrap justify-center items-center mb-3">
                    <progress value = {index + Number(answer !== null)} max = {QuestionsLength} className = "md:w-5/12 w-8/12 h-2"></progress>
                </div>

                <div className = "flex flex-wrap md:justify-around justify-between items-center w-8/12">
                    <div>
                        <p>Question <strong>{index + 1} </strong> / {QuestionsLength}</p>
                    </div>

                    <div>
                        <p><strong>{points}</strong> / {maxPossiblePoints}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressQuiz;