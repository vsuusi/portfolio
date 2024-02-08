import { useInView } from "react-intersection-observer";
import "./Photo.css"
import profile from "../resources/profile/profile_v5.png";
import thatsme from "../resources/other/thatsme.svg";

const Photo = () => {

    const { ref: phoCo, inView: phoCoIsVisible} = useInView();

    return(
        <div ref={phoCo} className={`photo-container ${phoCoIsVisible ? "photo-container-animation" : ""}`}>
            <img
                className="photo-profile"
                src={profile}
                alt="My lolo xD">
            </img>
            <img
                className="photo-thatsme"
                src={thatsme}
                alt="My lolo xD">
            </img>
        </div>
    );
};

export default Photo;