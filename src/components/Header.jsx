import ReactLogo from "../../public/reactLogo";

const Header = () => {
    return (
        <>
            <div className = "flex flex-wrap justify-center items-center dark:text-white select-none py-3 mb-2">
                <ReactLogo/>

                <h1 className = "text-4xl ml-5 capitalize max-[280px]:text-3xl max-[230px]:text-2xl text-center max-[500px]:w-full">the react quiz</h1>
            </div>
        </>
    );
};

export default Header;