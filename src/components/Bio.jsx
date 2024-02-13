import { useInView } from "react-intersection-observer";
import "./Bio.css";
import Arrow from "./Arrow";

const Bio = () => {

    const [bio1Ref, bio1InView] = useInView();
    const [bio2Ref, bio2InView] = useInView();
    const [bio3Ref, bio3InView] = useInView();

    return(
        <div className="bio-container">
            <div ref={bio1Ref} id="bio1" className={`bio-1 ${bio1InView ? "animate-bio" : ""}`}>
                <p><span className="bio-greentext">My</span> name is <strong>Santeri Uusitalo</strong>, 
                <br/>a third year software engineering student based in <span className="bio-greentext">Tampere.</span></p>
            </div>
            <Arrow nextComponent={'bio2'}/>

            <div ref={bio2Ref} id="bio2" className={`bio-2 ${bio2InView ? "animate-bio" : ""}`}>
                <p>I am looking to<span className="bio-greentext"> kick start</span> my career 
                <br/> to <span className="bio-greentext"> expand </span>my programming skills in a professional environment.   
                <br/> I have a <span className="bio-greentext">growing passion</span> towards the IT-industry and 
                <br/>I am excited to contribute to <span className="bio-greentext">innovative  projects.</span></p>
            </div>
            <Arrow nextComponent={'bio3'}/>

            <div ref={bio3Ref} id="bio3" className={`bio-3 ${bio3InView ? "animate-bio" : ""}`}>
                <p>Currently most <span className="bio-greentext">interesting</span> to me are front end developing, UI's, UX and AI
                    , but almost anything in this field gets me <span className="bio-greentext">excited</span> to learn <span className="bio-greentext">more!</span> 
                <br/>You can find my resume below next to LinkedIn and GitHub.</p>
            </div>
            <Arrow nextComponent={'roller'}/>

        </div>
    );
};

export default Bio;