
const ProgressQuiz = ({ index ,  QuestionsLength , maxPossiblePoints , answer , points }) => {
    // Number(answer !== null) --> it returns 1 if it is true and if it is false it returns 0
    return (
        <>
            <div className = "w-full flex flex-wrap justify-evenly items-center my-3 mb-5">
                
                <div className = "w-full text-center flex flex-wrap justify-center items-center mb-3">
                    <progress value = {index + Number(answer !== null)} max = {QuestionsLength} className = "w-[520px] h-2"></progress>
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