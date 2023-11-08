
const Btn = ({ content , type , dispatch }) => {
    return (
        <>
            <button onClick = {() => dispatch({type})} className = 'p-3 px-4 border outline-none dark:border-neutral-700 border-neutral-400 hover:bg-neutral-700 hover:text-white transition-all rounded-full capitalize'>{content}</button>
        </>
    );
};

export default Btn;