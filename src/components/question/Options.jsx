
const Options = ({ option , answer , correctOption , dispatch , index }) => {
    const hasAnswer = answer !== null;

    return (
        <>
            <button onClick = {() => dispatch({type : 'newAnswer' , payLoad : index})} disabled = {hasAnswer} className = {`relative w-9/12 ${hasAnswer ? (index === correctOption ? 'bg-green-500' : 'bg-orange-500') : 'hover:bg-transparent'} disabled:cursor-not-allowed p-3 px-6 box-border m-2 outline-none rounded-xl transition-all border border-neutral-700 bg-neutral-700 text-start`}>
                {option}

                <span className = {` opacity-0 ${index === answer && 'opacity-100'} text-xs ml-5`}>( your answer )</span>
                {
                    hasAnswer ? 
                        index === correctOption ?
                        <i className = "bx bx-check absolute right-3 top-2 text-xl"></i> :
                        <i className = "bx bx-x absolute right-3 top-2 text-xl"></i>
                    : ''
                }
            </button>
        </>
    );
};

export default Options;