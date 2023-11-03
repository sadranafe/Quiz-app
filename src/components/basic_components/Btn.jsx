
const Btn = ({ content , type , dispatch }) => {
    return (
        <>
            <button onClick = {() => dispatch({type})} className = 'p-3 px-4 border outline-none border-neutral-700 hover:bg-neutral-700 transition-all rounded-full capitalize'>{content}</button>
        </>
    );
};

export default Btn;