import "./Photo.css"
import profile from "../resources/profile/profile_v2.png";
import thatsme from "../resources/other/thatsme.svg";

const Photo = () => {
    return(
        <div className="photo-container">
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