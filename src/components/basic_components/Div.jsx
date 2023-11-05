import React from 'react';

const Div = ({ children }) => {
    return (
        <>
            <div className = "relative h-96 w-full select-none text-white bg-gra y-600 flex flex-wrap justify-center items-center">
                {children}
            </div>   
        </>
    );
};

export default Div;