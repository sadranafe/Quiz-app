import Options from "./Options";

const Question = ({ currentQuestion , answer , dispatch }) => {
    const { question , correctOption , options } = currentQuestion
    return (
        <>
            <div className = "w-1/2 flex flex-wrap justify-center items-center">
                <div className = "w-full text-center">
                    <h1 className = "text-2xl">{question}</h1>
                </div>

                <div className = "flex flex-wrap justify-center items-center pt-5">
                    {
                        options.map((opt , index) => {
                            return(
                                <>
                                    <Options key = {index} index = {index} option = {opt} answer = {answer} correctOption = {correctOption} dispatch = {dispatch}/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Question;