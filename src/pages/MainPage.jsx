import Bio from "../components/Bio";
import Photo from "../components/Photo";
import Roller from "../components/Roller";
import Welcome from "../components/Welcome";

const MainPage = () => {
    return (
        <>
            <Welcome/>
            <Bio/>
            <Photo/>
            <Roller/>
        </>
    );
};

export default MainPage;