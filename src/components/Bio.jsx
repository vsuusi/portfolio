import { useInView } from "react-intersection-observer";
import "./Bio.css";
import Arrow from "./Arrow";

const Bio = () => {

    const [bio1Ref, bio1InView] = useInView();
    const [bio2Ref, bio2InView] = useInView();

    return(
        <div className="bio-container">
            <div ref={bio1Ref} id="bio1" className={`bio-1 ${bio1InView ? "animate-bio" : ""}`}>
                <p> <span className="bio-greentext">My</span> name is <strong>Santeri Uusitalo</strong>, 
                    a third year software engineering student and I am <span className="bio-greentext">curiously </span>seeking 
                    a trainee position to apply and <span className="bio-greentext">expand </span>my programming skills. 
                <br/><span className="bio-greentext">Eager</span> to learn through hands-on experiences, I am<span className="bio-greentext"> ambitious </span> 
                    about developing my expertise in <span className="bio-greentext">cutting-edge </span>technologies.</p>
            </div>
            <Arrow nextComponent={'bio2'}/>

            <div ref={bio2Ref} id="bio2" className={`bio-2 ${bio2InView ? "animate-bio" : ""}`}>
                <p>Currently most <span className="bio-greentext">interesting</span> to me are front end developing, UI's, UX and AI
                    , but almost anything in this field gets me <span className="bio-greentext">excited</span> to learn <span className="bio-greentext">more!</span> 
                <br/>You can find my resume below next to LinkedIn and GitHub.</p>
            </div>
            <Arrow nextComponent={'roller'}/>

        </div>
    );
};

export default Bio;