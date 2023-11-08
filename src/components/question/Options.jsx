
const Options = ({ option , answer , correctOption , dispatch , index }) => {
    const hasAnswer = answer !== null;

    return (
        <>
            <button onClick = {() => dispatch({type : 'newAnswer' , payLoad : index})} disabled = {hasAnswer} className = {`flex justify-between items-center w-10/12 ${option.length >= 62 && 'text-sm'} ${hasAnswer ? (index === correctOption ? "bg-green-600" : "bg-orange-500") : 'dark:hover:bg-transparent hover:bg-neutral-600 hover:text-white dark:hover:border-neutral-700 dark:bg-neutral-700 bg-neutral-400 border-transparent text-black dark:text-white'} disabled:cursor-not-allowed p-3 px-3 box-border m-2 outline-none rounded-xl transition-all border dark:border-neutral-700 border-transparent text-start`}>
                <span>
                    {option}
                    <span className = {index === answer ? 'text-[11px] ml-3' : 'hidden'}>(your answer)</span>
                </span>

                <span className = "translate-y-1">
                    {
                        hasAnswer ? 
                            index === correctOption ?
                            <i className = "bx bx-check"></i> :
                            <i className = "bx bx-x"></i>
                            : ''
                    }
                </span>
            </button>
        </>
    );
};

export default Options;