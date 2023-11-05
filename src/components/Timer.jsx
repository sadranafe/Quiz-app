import { useEffect } from "react";

const Timer = ({ dispatch , secondsRemaining }) => {
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    useEffect( () => {
        const time = setInterval(() => {
            dispatch({type : 'tick'})
        },1000)

        // clean up funtion for timeInterval.
        return () => clearInterval(time)
    },[dispatch])
    
    return (
        <>
            <div className = "text-white mt-3 absolute -bottom-14 left-64">
                <p className = "border border-neutral-700 w-fit p-2 px-4 rounded-xl">{mins < 10 && '0'}{mins} : {seconds < 10 && '0'}{seconds}</p>
            </div>
        </>
    );
};

export default Timer;