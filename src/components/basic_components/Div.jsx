import React from 'react';

const Div = ({ children }) => {
    return (
        <>
            <div className = "h-96 w-screen text-white bg-gray-600 flex flex-wrap justify-center items-center">
                {children}
            </div>   
        </>
    );
};

export default Div;