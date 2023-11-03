import ReactLogo from "../../public/reactLogo";

const Header = () => {
    return (
        <>
            <div className = "flex flex-wrap justify-center items-center text-white select-none py-3 mb-2">
                <ReactLogo/>

                <h1 className = "text-4xl ml-5 capitalize">the react quiz</h1>
            </div>
        </>
    );
};

export default Header;