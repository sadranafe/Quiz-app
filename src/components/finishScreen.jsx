import Btn from "./basic_components/Btn";

const FinishScreen = ({ points , maxPossiblePoints ,  dispatch , highScore }) => {
    const PointsPercentage = (points / maxPossiblePoints) * 100;

    let emoji;
    if(PointsPercentage === 100) emoji = '🥇'
    if(PointsPercentage >= 80 && PointsPercentage < 100) emoji = '🎉'
    if(PointsPercentage >= 50 && PointsPercentage < 80) emoji = '🙃'
    if(PointsPercentage > 0 && PointsPercentage < 50) emoji = '🤔'
    if(PointsPercentage === 0) emoji = '🤦';

    return (
        <>
            <div className = "flex flex-wrap justify-center items-center content-center">
                <div className = 'bg-gradient-to-br from-blue-400 to-green-700 p-5 px-20 rounded-3xl text-lg'>
                    <p className = "text-lg">
                        <span className = "text-xl">{emoji}</span> you scored <strong className = "underline underline-offset-4">{points}</strong> out of {maxPossiblePoints} ({Math.ceil(PointsPercentage)}%)
                    </p>
                </div>

                <div className = "w-full text-center mb-7 mt-3">
                    <p>( HighScore : {highScore} points )</p>
                </div>

                <div className = "p-2">
                    <Btn content = 'restart' dispatch = {dispatch} type = 'reset'/>
                </div>
            </div>
        </>
    );
};

export default FinishScreen;