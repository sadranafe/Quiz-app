
const ProgressQuiz = ({ index ,  QuestionsLength , maxPossiblePoints , answer , points }) => {
    return (
        <>
            <div className = "w-full flex flex-wrap justify-evenly items-center my-3 mb-5">
                
                <div className = "w-full text-center flex flex-wrap justify-center items-center mb-3">
                    <progress value = {answer !== null ?  index + 1 : index} max = {QuestionsLength} className = "w-[520px] h-2"></progress>
                </div>

                <div>
                    <p>Question <strong>{index + 1} </strong> / {QuestionsLength}</p>
                </div>

                <div>
                    <p><strong>{points}</strong> / {maxPossiblePoints}</p>
                </div>

            </div>
        </>
    );
};

export default ProgressQuiz;