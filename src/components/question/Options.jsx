
const Options = ({ option , answer , correctOption , dispatch , index }) => {
    const hasAnswer = answer !== null;

    return (
        <>
            <button onClick = {() => dispatch({type : 'newAnswer' , payLoad : index})} disabled = {hasAnswer} className = {`flex justify-between items-center w-10/12 ${option.length >= 62 && 'text-sm'} ${hasAnswer ? (index === correctOption ? "bg-green-600" : "bg-orange-500") : 'hover:bg-transparent bg-neutral-700'} disabled:cursor-not-allowed p-3 px-3 box-border m-2 outline-none rounded-xl transition-all border border-neutral-700 text-start`}>
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