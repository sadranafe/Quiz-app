import { useEffect } from "react";
import { useState } from "react";

const HTML_ELEMENT = document.querySelector('html');

const Theme = () => {
    const [theme , setTheme] = useState('dark');
    const [active , setActive] = useState(theme === 'dark' ? 2 : 1)

    const lightBtn = () => {
        setTheme('light')
        setActive(1)
    }
    
    const darkBtn = () => {
        setTheme('dark')
        setActive(2)
    }

    useEffect(() => {
        theme === 'dark' ? HTML_ELEMENT.setAttribute('class', theme) : HTML_ELEMENT.setAttribute('class', theme)
    },[theme])

    return (
        <>
            <div className = "w-32 text-white flex flex-wrap justify-center items-center p-2 m-2 border dark:border-neutral-700 border-neutral-300 rounded-full">
                <button onClick = {lightBtn} className = {`${active === 1 && 'bg-neutral-600'} transition-all max-[695px]:p-0.5 max-[695px]:px-2 p-1 px-2.5 m-1 mx-2 rounded-full`}>
                    <i className = "bx bx-sun text-lg"></i>
                </button>

                <button onClick = {darkBtn} className = {`${active === 2 ? 'bg-neutral-600 text-white' : 'text-black'} transition-all max-[695px]:p-0.5 max-[695px]:px-2 p-1 px-2.5 m-1 mx-2 rounded-full`}>
                    <i className = "bx bx-moon text-lg"></i>
                </button>
            </div>
        </>
    );
};

export default Theme;